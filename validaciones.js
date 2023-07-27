(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
  
        if (form.checkValidity()) {
          const successAlert = form.querySelector('.alert.alert-success');
          successAlert.style.display = 'block';
        }
      }, false)
    })
  })()
