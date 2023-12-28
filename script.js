// script.js

document.addEventListener('DOMContentLoaded', function () {
  const basicToggle = document.getElementById('basic-toggle');
  const proToggle = document.getElementById('pro-toggle');
  const basicPrice = document.getElementById('basic-price');
  const proPrice = document.getElementById('pro-price');

  basicToggle.addEventListener('change', function () {
    basicPrice.textContent = basicToggle.checked ? '$19.99' : '$24.99';
  });

  proToggle.addEventListener('change', function () {
    proPrice.textContent = proToggle.checked ? '$39.99' : '$49.99';
  });
});
