// ========================================
// Theme Toggle
// ========================================
const themeToggle = document.getElementById("themeToggle")
const html = document.documentElement

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem("theme") || "light"
html.setAttribute("data-theme", savedTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"

  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// ========================================
// Page Navigation
// ========================================
const navLinks = document.querySelectorAll("[data-page]")
const pages = document.querySelectorAll(".page")
const navMenu = document.getElementById("navMenu")
const navToggle = document.getElementById("navToggle")

function showPage(pageId) {
  // Hide all pages
  pages.forEach((page) => {
    page.classList.remove("active")
  })

  // Show selected page
  const targetPage = document.getElementById(`page-${pageId}`)
  if (targetPage) {
    targetPage.classList.add("active")
  }

  // Update nav links
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-page") === pageId) {
      link.classList.add("active")
    }
  })

  // Close mobile menu
  navMenu.classList.remove("active")

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Add click event to all navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const pageId = link.getAttribute("data-page")
    showPage(pageId)

    // Update URL hash
    history.pushState(null, null, `#${pageId}`)
  })
})

// Handle browser back/forward buttons
window.addEventListener("popstate", () => {
  const hash = window.location.hash.slice(1) || "inicio"
  showPage(hash)
})

// Load initial page based on URL hash
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.slice(1) || "inicio"
  showPage(hash)
})

// ========================================
// Mobile Menu Toggle
// ========================================
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove("active")
  }
})

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById("contactForm")
const toast = document.getElementById("toast")
const toastMessage = document.getElementById("toastMessage")

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Here you can integrate with a form service like Formspree, Netlify Forms, etc.
  // For now, we'll simulate a successful submission

  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = "<span>Enviando...</span>"
  submitBtn.disabled = true

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Show success message
  showToast("¡Mensaje enviado correctamente!")

  // Reset form
  contactForm.reset()
  submitBtn.innerHTML = originalText
  submitBtn.disabled = false
})

function showToast(message) {
  toastMessage.textContent = message
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// ========================================
// Smooth scroll for anchor links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (!this.getAttribute("data-page")) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})

// ========================================
// Navbar scroll effect
// ========================================
let lastScroll = 0
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})
