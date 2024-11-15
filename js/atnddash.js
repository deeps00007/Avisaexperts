  const leaveRequestBtn = document.querySelector('.leave-request-btn');
    const outerLeaveReq = document.querySelector('.outer-leave-req');

    // Toggle display when clicking the Leave Request button
    leaveRequestBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from bubbling up to the document
      outerLeaveReq.style.display = 
        outerLeaveReq.style.display === 'none' || outerLeaveReq.style.display === '' ? 'block' : 'none';
    });

    // Hide .outer-leave-req when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!outerLeaveReq.contains(event.target) && !leaveRequestBtn.contains(event.target)) {
        outerLeaveReq.style.display = 'none';
      }
    });