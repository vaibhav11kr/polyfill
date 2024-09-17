function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
      const context = this;
      
      clearTimeout(timeoutId);  // Clear the previous timeout
      
      timeoutId = setTimeout(() => {
        func.apply(context, args);  // Execute the function after the delay
      }, delay);
    };
  }
  


function handleResize() {
    console.log('Resized');
  }
  
  window.addEventListener('resize', debounce(handleResize, 300));  // 300ms debounce delay
  