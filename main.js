
  gsap.registerPlugin(ScrollTrigger);

$('[data-trigger]').each(function(i,el){

  gsap.from($(this).find('[data-motion="item"]'),{
      scrollTrigger: {
        trigger: el,
        start: "top 80%", 
        end: "top 30%",   
        toggleActions:"play none none reverse"
      },
      opacity:0,
      y:150
    })
})

$('#footer .tab-button').click(function (e) {
  e.preventDefault();

  const $cert = $(this).find('.cert');
  const $targetBoard = $(this).next('.linkbox').find('.group-board, .group-board2');
  const isOpen = $targetBoard.hasClass('active');

  // 모든 닫기
  $('.group-board, .group-board2').removeClass('active');
  $('.cert').removeClass('on');

  if (!isOpen) {
    // 현재 항목만 열기
    $targetBoard.addClass('active');
    $cert.addClass('on');
  }
});
$('.btn-menu').on('click', function (e) {
  e.preventDefault();
  $('.gnbarea_mobile').addClass('active');
});

$('.btn_sidemenu_close').on('click', function (e) {
  e.preventDefault();
  $('.gnbarea_mobile').removeClass('active');
});


$('.title').on('click', function (e) {
  e.preventDefault();

  const $li = $(this).closest('li');
  const $submenu = $li.find('.submenu');
  const $cert = $li.find('.cert');

  const isOpen = $submenu.is(':visible');

  $('.submenu').stop().slideUp();
  $('.cert').removeClass('rotate');

  if (!isOpen) {
    $submenu.stop().slideDown();
    $cert.addClass('rotate');
  }
});