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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除字段的错误信息
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = '请填写邮箱地址';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '请填写有效的邮箱地址';
    }
    
    if (!formData.title) {
      newErrors.title = '请填写问题标题';
    }
    
    if (!formData.description) {
      newErrors.description = '请填写问题描述';
    }
    
    if (!formData.ideVersion) {
      newErrors.ideVersion = '请填写 IDE 版本号';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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
        setFormData({
          name: '',
          email: '',
          title: '',
          description: '',
          steps: '',
          ideVersion: ''
        });
      } else {
        console.error('表单提交失败');
      }
    } catch (error) {
      console.error('提交过程中发生错误:', error);
    }
  };

  return (
    <Layout
      title="报告问题 / Bug Report"
      description="CodePins 插件问题反馈表单">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>报告问题 / Bug Report</h1>
          
          {submitted ? (
            <div className={styles.thankYouMessage}>
              <h2>感谢您的反馈！</h2>
              <p>我们已收到您的问题报告，将尽快处理并回复。</p>
              <Link to="/" className={styles.homeLink}>返回首页</Link>
            </div>
          ) : (
            <>
              <p className={styles.description}>
                请填写以下表单来报告 CodePins 插件中遇到的问题，我们将尽快处理您的反馈。
              </p>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>姓名 (可选)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="您的姓名"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    邮箱 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="您的邮箱地址"
                    required
                  />
                  {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="title" className={styles.label}>
                    问题标题 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
                    placeholder="简短描述问题"
                    required
                  />
                  {errors.title && <p className={styles.errorText}>{errors.title}</p>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="description" className={styles.label}>
                    问题描述 <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
                    placeholder="请详细描述您遇到的问题"
                    rows="5"
                    required
                  />
                  {errors.description && <p className={styles.errorText}>{errors.description}</p>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="steps" className={styles.label}>
                    复现步骤 (可选)
                  </label>
                  <textarea
                    id="steps"
                    name="steps"
                    value={formData.steps}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="请描述如何复现这个问题"
                    rows="3"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="ideVersion" className={styles.label}>
                    IDE 版本号 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="ideVersion"
                    name="ideVersion"
                    value={formData.ideVersion}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.ideVersion ? styles.inputError : ''}`}
                    placeholder="例如: IntelliJ IDEA 2023.1.2"
                    required
                  />
                  {errors.ideVersion && <p className={styles.errorText}>{errors.ideVersion}</p>}
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  提交问题报告
                </button>
              </form>
              
              <div className={styles.footer}>
                <Link to="/" className={styles.homeLink}>返回首页</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
