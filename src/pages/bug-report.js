import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './bug-report.module.css';

export default function BugReport() {
  const { siteConfig } = useDocusaurusContext();
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    steps: '',
    ideVersion: ''
  });
  const [errors, setErrors] = useState({});
  const [typing, setTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [introText, setIntroText] = useState('');
  const [welcomeText, setWelcomeText] = useState('');
  const inputRef = useRef(null);

  // 表单字段配置
  const formFields = [
    {
      name: 'name',
      label: '姓名',
      placeholder: '请输入您的姓名 (可选)',
      required: false,
      type: 'text',
      prompt: '您好！请问您的姓名是？(可选，按 Enter 跳过)'
    },
    {
      name: 'email',
      label: '邮箱',
      placeholder: '请输入您的邮箱地址',
      required: true,
      type: 'email',
      prompt: '请输入您的邮箱地址，以便我们回复您:'
    },
    {
      name: 'title',
      label: '问题标题',
      placeholder: '请输入问题标题',
      required: true,
      type: 'text',
      prompt: '请简要描述您遇到的问题:'
    },
    {
      name: 'description',
      label: '问题描述',
      placeholder: '请详细描述您遇到的问题',
      required: true,
      type: 'textarea',
      prompt: '请详细描述您遇到的问题:'
    },
    {
      name: 'steps',
      label: '重现步骤',
      placeholder: '请描述如何重现这个问题 (可选)',
      required: false,
      type: 'textarea',
      prompt: '请描述如何重现这个问题 (可选，按 Enter 跳过):'
    },
    {
      name: 'ideVersion',
      label: 'IDE 版本号',
      placeholder: '例如: IntelliJ IDEA 2023.1.2',
      required: true,
      type: 'text',
      prompt: '请输入您使用的 IDE 版本号:'
    }
  ];

  // 打字机效果
  useEffect(() => {
    let introInterval;
    let welcomeInterval;
    
    if (!submitted) {
      const fullIntroText = 'CodePins Bug Report Terminal v1.0.0';
      let i = 0;
      
      introInterval = setInterval(() => {
        if (i <= fullIntroText.length) {
          setIntroText(fullIntroText.substring(0, i));
          i++;
        } else {
          clearInterval(introInterval);
          
          // 开始欢迎文字
          const fullWelcomeText = '欢迎使用 CodePins 问题反馈系统！请按照提示一步步填写信息。';
          let j = 0;
          
          welcomeInterval = setInterval(() => {
            if (j <= fullWelcomeText.length) {
              setWelcomeText(fullWelcomeText.substring(0, j));
              j++;
            } else {
              clearInterval(welcomeInterval);
              setTyping(false);
            }
          }, 30);
        }
      }, 50);
      
      setTyping(true);
    }
    
    // 闪烁的光标效果
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(introInterval);
      clearInterval(welcomeInterval);
      clearInterval(cursorInterval);
    };
  }, [submitted]);

  // 自动聚焦到当前输入框
  useEffect(() => {
    if (inputRef.current && !typing && !submitted) {
      inputRef.current.focus();
    }
  }, [currentStep, typing, submitted]);

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

  const handleKeyDown = (e) => {
    // 按回车键进入下一步
    if (e.key === 'Enter') {
      e.preventDefault();
      const currentField = formFields[currentStep];
      
      // 如果是必填字段但为空，显示错误
      if (currentField.required && !formData[currentField.name]) {
        setErrors(prev => ({
          ...prev,
          [currentField.name]: `请填写${currentField.label}`
        }));
        return;
      }
      
      // 邮箱验证
      if (currentField.name === 'email' && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        setErrors(prev => ({
          ...prev,
          email: '请填写有效的邮箱地址'
        }));
        return;
      }
      
      // 如果是最后一个字段，提交表单
      if (currentStep === formFields.length - 1) {
        handleSubmit(e);
      } else {
        // 否则进入下一步
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
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
        console.error('表单提交失败');
        alert('提交失败，请稍后重试');
      }
    } catch (error) {
      console.error('提交过程中发生错误:', error);
      alert('提交过程中发生错误，请稍后重试');
    }
  };

  return (
    <Layout
      title="报告问题 / Bug Report"
      description="CodePins 插件问题反馈表单">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <div className={`${styles.dot} ${styles.redDot}`}></div>
              <div className={`${styles.dot} ${styles.yellowDot}`}></div>
              <div className={`${styles.dot} ${styles.greenDot}`}></div>
            </div>
            <div className={styles.terminalTitle}>contact@codepins.dev</div>
          </div>
          
          {submitted ? (
            <div className={styles.thankYouMessage}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalSuccess}>SUCCESS:</span> 表单提交成功！
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span> 感谢您的反馈！我们已收到您的问题报告，将尽快处理并回复。
              </div>
              <Link to="/" className={styles.homeLink}>返回首页</Link>
            </div>
          ) : (
            <div className={styles.terminalContent}>
              {/* 终端标题和欢迎信息 */}
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span> {introText}{showCursor && typing && <span className={styles.cursor}>_</span>}
              </div>
              
              {introText.length === 'CodePins Bug Report Terminal v1.0.0'.length && (
                <div className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>$</span> {welcomeText}{showCursor && typing && <span className={styles.cursor}>_</span>}
                </div>
              )}
              
              {/* 当前表单字段 */}
              {!typing && formFields.slice(0, currentStep + 1).map((field, index) => {
                const isCurrentField = index === currentStep;
                return (
                  <div key={field.name} className={styles.terminalBlock}>
                    {/* 显示提示 */}
                    <div className={styles.terminalLine}>
                      <span className={styles.terminalPrompt}>$</span> <span className={styles.terminalCommand}>{field.prompt}</span>
                    </div>
                    
                    {/* 显示输入框（只对当前字段显示） */}
                    {isCurrentField ? (
                      <div className={styles.terminalLine}>
                        <span className={styles.inputPrefix}>$ ~ </span>
                        {field.type === 'textarea' ? (
                          <textarea
                            ref={inputRef}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className={`${styles.textarea} ${errors[field.name] ? styles.inputError : ''}`}
                            placeholder={field.placeholder}
                            rows={4}
                            required={field.required}
                          />
                        ) : (
                          <input
                            ref={inputRef}
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className={`${styles.input} ${errors[field.name] ? styles.inputError : ''}`}
                            placeholder={field.placeholder}
                            required={field.required}
                            autoComplete="off"
                          />
                        )}
                        {showCursor && <span className={styles.cursor}>_</span>}
                      </div>
                    ) : (
                      /* 已填写字段显示已输入的内容 */
                      <div className={styles.terminalLine}>
                        <span className={styles.inputPrefix}>$ ~ </span>
                        <span className={styles.terminalOutput}>
                          {formData[field.name] || '(空)'}
                        </span>
                      </div>
                    )}
                    
                    {/* 显示错误信息 */}
                    {errors[field.name] && (
                      <div className={styles.terminalLine}>
                        <span className={styles.terminalError}>Error:</span> {errors[field.name]}
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* 最后一个字段填写完成后显示提交提示 */}
              {currentStep === formFields.length - 1 && formData[formFields[currentStep].name] && !errors[formFields[currentStep].name] && (
                <div className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>$</span> <span className={styles.terminalInfo}>按回车(Enter)提交表单...</span>
                </div>
              )}
              
              <div className={styles.footer}>
                <p>如果您有其他问题或建议，请直接发送邮件至 <a href="mailto:support@codepins.dev" className={styles.emailLink}>support@codepins.dev</a></p>
              </div>
            </div>
          )}
        </div>
      </div>
  </Layout>
  );
}
