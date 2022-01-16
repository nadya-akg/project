import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

//Форма для отправки сообщения
new Vue({
  el: '#contactForm',
  data(){
    return{
      form: {
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      }
    }
  },
  computed: {
    canAdd() {
        return this.form.name.trim() && this.form.email.trim() && this.form.company.trim() && this.form.subject.trim() && this.form.message.trim()
    }
  },
  methods: {
    async getInTouch(){
      const {...contact} = this.form
      console.log(contact)
      this.form.name = ''
      this.form.email = ''
      this.form.company = ''
      this.form.subject = ''
      this.form.message = ''
    }
  }
})

//Слайдер в разделе "Портфолио"
new Vue({
    el: '#sliderPortfolio',
    data(){
      return{
        project: '', 
        projects:
        [
            {
                pic: '/assets/images/projects/project1.png', 
                service: 'Branding & Design', 
                name: 'Project 1', 
                details: '',
                slides: ''
            },
            {
                pic: '/assets/images/projects/project2.png', 
                service: 'Branding & Design', 
                name: 'Project 2', 
                details: '',
                slides: ''
            },
            {
                pic: '/assets/images/projects/project3.png', 
                service: 'Branding & Design', 
                name: 'Project 3', 
                details: '',
                slides: ''
            },
            {
                pic: '/assets/images/projects/project4.png', 
                service: 'Branding & Design', 
                name: 'Project 4', 
                details: '',
                slides: ''
            },
            {
                pic: '/assets/images/projects/project5.png',  
                service: 'Branding & Design', 
                name: 'Project 5', 
                details: '',
                slides: ''
            }
        ]
      }
    },
    async mounted() {
        this.project = this.projects[0]
        console.log('Start project:')
        console.log(this.project)
    },
    methods: {
      async move(current){
        this.project = current
        console.log('Current project:')
        console.log(this.project)
      }
    }
})

//Слайдер в разделе "Отзывы"
new Vue({
    el: '#sliderTestimoial',
    data(){
      return{
        testimoial: '', 
        testimoials:
        [
            {
                pic: '/assets/images/testimoials/feedback1.png', 
                message: 'These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry', 
                author: 'Anthony Watkins', 
                company: 'VP of Product, VISA' 
            },
            {
                pic: '/assets/images/testimoials/feedback2.png', 
                message: 'These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry', 
                author: 'Vincent Gardner', 
                company: 'Founder & CEO, Pinterest' 
            },
            {
                pic: '/assets/images/testimoials/feedback3.png', 
                message: 'These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry', 
                author: 'Donna Watson', 
                company: 'VP of Product, MTV' 
            },
            {
                pic: '/assets/images/testimoials/feedback4.png', 
                message: 'These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry', 
                author: 'Armando Angeles', 
                company: 'VP of Business, MasterCard' 
            },
            {
                pic: '/assets/images/testimoials/feedback5.png', 
                message: 'These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry', 
                author: 'Nguyen Thanh', 
                company: 'VP of Product, Autodesk' 
            }
        ]
      }
    },
    async mounted() {
        this.testimoial = this.testimoials[0]
        console.log('Start testimoial:')
        console.log(this.testimoial)
    },
    methods: {
      async move(current){
        this.testimoial = current
        console.log('Current testimoial:')
        console.log(this.testimoial)
      }
    }
})

//Отрисовка линии в разделе "Команда" в зависимости от разрешения экрана
function line() {
  var size = 0;
  var i = 1;

  $('.team__profile').each(function () {
    $(this).removeClass('team__profile-end-line');
    $(this).removeClass('team__profile-end-column');
    size++;
  });

  if ($(window).width() > 1254) {
    $('.team__profile').each(function () {
      if(i % 4 === 0){
        $(this).addClass('team__profile-end-line');
      }

      if(size % 4 === 0) {
        if(i > size - 4){
          $(this).addClass('team__profile-end-column');
        }
      }
      else if(size % 4 === 1){
        if(i > size - 1){
          $(this).addClass('team__profile-end-column');
        }
      }
      else if(size % 4 === 2){
        if(i > size - 2){
          $(this).addClass('team__profile-end-column');
        }
      }
      else if(size % 4 === 3){
        if(i > size - 3){
          $(this).addClass('team__profile-end-column');
        }
      }
      i++;
    });
  }
  else if ($(window).width() > 896) {
    $('.team__profile').each(function () {
      if(i % 3 === 0){
        $(this).addClass('team__profile-end-line');
      }

      if(size % 3 === 0) {
        if(i > size - 3){
          $(this).addClass('team__profile-end-column');
        }
      }
      else if(size % 3 === 1){
        if(i > size - 1){
          $(this).addClass('team__profile-end-column');
        }
      }
      else if(size % 3 === 2){
        if(i > size - 2){
          $(this).addClass('team__profile-end-column');
        }
      }
      i++;
    });
  }
  else if ($(window).width() > 608) {
    $('.team__profile').each(function () {
      if(i % 2 === 0){
        $(this).addClass('team__profile-end-line');
      }
      if(size % 4 === 0) {
        if(i > size - 2){
          $(this).addClass('team__profile-end-column');
        }
      }
      else if(size % 2 === 1){
        if(i > size - 1){
          $(this).addClass('team__profile-end-column');
        }
      }
      i++;
    });
  }
  else if ($(window).width() <= 608) {
    $('.team__profile').each(function () {
      $(this).addClass('team__profile-end-line')
      if(i === size){
          $(this).addClass('team__profile-end-column');
      }
      i++;
    });
  }
}

addEventListener('DOMContentLoaded', line)
addEventListener('DOMContentLoaded', $(window).resize(line))

//Измение отображения полей для ввода при фокусировке на них
$(document).mouseup(function (){
  $('.contact__form-input-name').removeClass('input_focus');
  $('.contact__form-input-email').removeClass('input_focus');
  $('.contact__form-input-company').removeClass('input_focus');
  $('.contact__form-input-subject').removeClass('input_focus');
  $('.contact__form-input-message').removeClass('input_focus');

  if ($('#nameInput').is(':focus')){
    $('.contact__form-input-name').addClass('input_focus');
  }
  else if ($('#emailInput').is(':focus')){
    $('.contact__form-input-email').addClass('input_focus');
  }
  else if ($('#companyInput').is(':focus')){
    $('.contact__form-input-company').addClass('input_focus');
  }
  else if ($('#subjectInput').is(':focus')){
    $('.contact__form-input-subject').addClass('input_focus');
  }
  else if ($('#messageInput').is(':focus')){
    $('.contact__form-input-message').addClass('input_focus');
  }
})