const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
const backProfileBtn = document.querySelector('.back-profile');

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add('turn');
      pageTurn.style.zIndex = 20 + index;
    }
  };
});

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn');

      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove('turn');

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

const coverRight = document.querySelector('.cover.cover-right');
const PageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
  coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
  PageLeft.style.zIndex = 20;
}, 3200);

pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove('turn');

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});

document.addEventListener('DOMContentLoaded', function () {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwCFw4aLxm3l7igCBfUNOPGn78LxbhwFghEK2UiB4eTpFwNkOQm92nYE-lpdv5y3C2p/exec';
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 'success') {
          msg.innerHTML = 'Message Sent';
          setTimeout(function () {
            msg.innerHTML = '';
          }, 3000);
          form.reset();
        } else {
          msg.innerHTML = 'Message not sent. Please try again later.';
        }
      })
      .catch((error) => {
        msg.innerHTML = 'Error sending the message. Please try again later.';
        console.error('Error!', error);
      });
  });
});
