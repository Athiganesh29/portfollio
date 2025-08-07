# 📧 Email Setup Guide for Contact Form

## **Option 1: EmailJS Setup (Recommended)**

### **Step 1: Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Create Email Service**
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. **Save the Service ID** (you'll need this)

### **Step 3: Create Email Template**
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Message from {{from_name}} - Portfolio Contact

Hello {{to_name}},

You have received a new message from your portfolio website:

**From:** {{from_name}} ({{from_email}})
**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Save the Template ID** (you'll need this)

### **Step 4: Get Your Public Key**
1. Go to "Account" → "API Keys"
2. **Copy your Public Key**

### **Step 5: Update Your Contact Component**
Replace these values in `src/Contact/Contact.jsx`:

```javascript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY") // Your EmailJS public key

const result = await emailjs.send(
    'YOUR_SERVICE_ID', // Your EmailJS service ID
    'YOUR_TEMPLATE_ID', // Your EmailJS template ID
    {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Adhi Ganesh', // Your name
        to_email: 'your-email@example.com' // Your email address
    }
)
```

### **Step 6: Test the Email Functionality**
1. Run your development server: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email for the message

---

## **Option 2: Formspree (Alternative)**

If you prefer a simpler setup, you can use Formspree:

### **Step 1: Create Formspree Account**
1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form

### **Step 2: Update Contact Component**
Replace the EmailJS code with Formspree:

```javascript
const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message
            })
        })
        
        if (response.ok) {
            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
            alert('Thank you for your message! I will get back to you soon.')
        } else {
            throw new Error('Failed to send message')
        }
    } catch (error) {
        setSubmitStatus('error')
        alert('Sorry, there was an error sending your message. Please try again.')
    } finally {
        setIsSubmitting(false)
    }
}
```

---

## **Option 3: Netlify Forms (If Deployed on Netlify)**

If you deploy your portfolio on Netlify, you can use their built-in form handling:

### **Step 1: Update Contact Form**
Add `data-netlify="true"` to your form:

```jsx
<form className="contact-form" onSubmit={handleSubmit} data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    {/* ... rest of your form fields ... */}
</form>
```

### **Step 2: Deploy to Netlify**
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy your site
4. Forms will be automatically handled by Netlify

---

## **🔧 Troubleshooting**

### **Common Issues:**

1. **"EmailJS is not defined"**
   - Make sure you installed emailjs-com: `npm install emailjs-com`
   - Check that the import is correct: `import emailjs from 'emailjs-com'`

2. **"Service ID not found"**
   - Double-check your Service ID in EmailJS dashboard
   - Make sure the service is active

3. **"Template ID not found"**
   - Verify your Template ID in EmailJS dashboard
   - Check that the template is published

4. **"Public key is invalid"**
   - Get the correct public key from EmailJS dashboard
   - Make sure you're using the public key, not the private key

### **Testing Tips:**
- Use your own email address for testing
- Check spam folder if emails don't arrive
- Test with different browsers
- Check browser console for error messages

---

## **📧 Email Template Variables**

In your EmailJS template, you can use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - The message content
- `{{to_name}}` - Your name
- `{{to_email}}` - Your email address

---

## **🚀 Next Steps**

1. **Choose your preferred method** (EmailJS recommended)
2. **Follow the setup steps** for your chosen method
3. **Test the functionality** thoroughly
4. **Deploy your portfolio** with working email functionality
5. **Monitor your emails** to ensure they're being received

Your contact form will now send real emails to your inbox! 📧✨ 