const jsTriggers = document.querySelectorAll('.block-ideas__item');

jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function(event) {
     event.preventDefault();
      const id = this.getAttribute('data-tab'),
          content = document.querySelector('.block-ideas__inner[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.block-ideas__item.block-active'),
          activeContent = document.querySelector('.block-ideas__inner.block-active');

      activeTrigger.classList.remove('block-active');
      trigger.classList.add('block-active');

      activeContent.classList.remove('block-active');
      content.classList.add('block-active');
   });
});
