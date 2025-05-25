import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './bug-report.module.css';

export default function BugReport() {
  const { siteConfig } = useDocusaurusContext();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    steps: '',
    ideVersion: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);



  // 表单字段配置
  const formFields = [
    {
      name: 'name',
      label: '姓名',
      placeholder: '输入您的姓名（可选）',
      required: false,
      type: 'text'
    },
    {
      name: 'email',
      label: '邮箱',
      placeholder: '输入您的邮箱地址',
      required: true,
      type: 'email'
    },
    {
      name: 'title',
      label: '问题标题',
      placeholder: '输入问题标题',
      required: true,
      type: 'text'
    },
    {
      name: 'description',
      label: '问题描述',
      placeholder: '请详细描述您遇到的问题',
      required: true,
      type: 'textarea'
    },
    {
      name: 'steps',
      label: '复现步骤',
      placeholder: '描述如何复现这个问题（可选）',
      required: false,
      type: 'textarea'
    },
    {
      name: 'ideVersion',
      label: 'IDE 版本',
      placeholder: '例如：IntelliJ IDEA 2023.1.2',
      required: true,
      type: 'text'
    }
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field error message
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    // 检查必填字段
    formFields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `请填写 ${field.label}`;
        isValid = false;
      }
    });
    
    // 验证邮箱格式
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '请输入有效的电子邮件地址';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  // Submit form
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mnndylqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed');
        alert('提交失败，请稍后再试');
      }
    } catch (error) {
      console.error('Error during submission:', error);
      alert(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="问题反馈"
      description="CodePins 插件问题反馈表单">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>问题反馈</h1>
          
          {submitted ? (
            <div className={styles.thankYouMessage}>
              <div className={styles.successMessage}>
                <h2>感谢您的反馈！</h2>
                <p>我们已收到您的问题报告，将尽快处理。</p>
              </div>
              <Link to="/" className={styles.homeLink}>返回首页</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {formFields.map((field) => (
                <div key={field.name} className={styles.formGroup}>
                  <label htmlFor={field.name} className={styles.label}>
                    {field.label}
                    {field.required && <span className={styles.required}>*</span>}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className={`${styles.input} ${errors[field.name] ? styles.inputError : ''}`}
                      rows={5}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className={`${styles.input} ${errors[field.name] ? styles.inputError : ''}`}
                    />
                  )}
                  
                  {errors[field.name] && (
                    <div className={styles.errorMessage}>{errors[field.name]}</div>
                  )}
                </div>
              ))}
              
              <div className={styles.formActions}>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '提交中...' : '提交报告'}
                </button>
              </div>
            </form>
          )}
          
          <div className={styles.footer}>
            <p>如果您有其他问题或建议，请发送邮件至 <a href="mailto:ilikexff@gmail.com" className={styles.emailLink}>ilikexff@gmail.com</a></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
