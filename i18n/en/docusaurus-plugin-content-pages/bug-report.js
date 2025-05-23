import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/bug-report.module.css';

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

  // Form field configuration
  const formFields = [
    {
      name: 'name',
      label: 'Name',
      placeholder: 'Enter your name (optional)',
      required: false,
      type: 'text'
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email address',
      required: true,
      type: 'email'
    },
    {
      name: 'title',
      label: 'Issue Title',
      placeholder: 'Enter the issue title',
      required: true,
      type: 'text'
    },
    {
      name: 'description',
      label: 'Issue Description',
      placeholder: 'Please describe the issue in detail',
      required: true,
      type: 'textarea'
    },
    {
      name: 'steps',
      label: 'Steps to Reproduce',
      placeholder: 'Describe how to reproduce this issue (optional)',
      required: false,
      type: 'textarea'
    },
    {
      name: 'ideVersion',
      label: 'IDE Version',
      placeholder: 'Example: IntelliJ IDEA 2023.1.2',
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
    
    // Check required fields
    formFields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `Please fill in ${field.label}`;
        isValid = false;
      }
    });
    
    // Validate email format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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
        alert('Submission failed, please try again later');
      }
    } catch (error) {
      console.error('Error during submission:', error);
      alert('Submission failed, please try again later');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Bug Report"
      description="CodePins plugin bug report form">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Bug Report</h1>
          
          {submitted ? (
            <div className={styles.thankYouMessage}>
              <div className={styles.successMessage}>
                <h2>Thank you for your feedback!</h2>
                <p>We have received your issue report and will process it as soon as possible.</p>
              </div>
              <Link to="/" className={styles.homeLink}>Return to Home</Link>
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
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </button>
              </div>
            </form>
          )}
          
          <div className={styles.footer}>
            <p>If you have other questions or suggestions, please send an email to <a href="mailto:ilikexff@gmail.com" className={styles.emailLink}>ilikexff@gmail.com</a></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
