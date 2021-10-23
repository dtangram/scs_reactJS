/* eslint linebreak-style: ['error', 'windows'] */
// import $ from 'jquery';

$(document).ready(() => {
  $(window).scroll((event) => {
    if ($(window).scrollTop() > 100) {
      $('.scroll-top-wrapper').addClass('show');
      $('.scroll-top-wrapper').click(() => {
        $('html, body').stop().animate({ scrollTop: $('html, body').offset().top }, 1000);
      });
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });

  // TRANSLATE

  // FOR ACCESSIBILITY
  const ctlanguagedropdown = $('.ct-language__dropdown');
  // const ctlanguagedropdownHidden = $(".ct-language__dropdown")
  //  .css({"display": "none", "overflow": "hidden"}),
  const ctlanguage = $('.ct-language');

  // $('.ct-language__dropdown').css({display: 'none', overflow: 'hidden'});

  $('#translator').on('keydown', (event) => {
    const keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode === 13) {
      event.preventDefault();
      $('.ct-language__dropdown').css({ display: 'block', overflow: 'visible' });
      $('.lang-en').focus();
    }
  });


  $('.lang-ar').focusout(() => {
    $('.ct-language__dropdown').removeClass('translator-display').css({ display: 'none', overflow: 'hidden' });
  });

  ctlanguage.on('mouseover', () => {
    ctlanguagedropdown.css({
      display: 'block',
      top: '100px',
      overflow: 'visible',
      transition: 'display 5s, top 5s, overflow 5s ease-in-out',
    });
  });

  ctlanguagedropdown.on('mouseout', () => {
    ctlanguagedropdown.css({
      overflow: 'hidden',
      top: '100px',
      display: 'none',
      transition: 'display 5s, top 5s, overflow 5s ease-in-out',
    });
  });

  $('.hp-scs-logo-text a, #hp-nav .left > li:nth-child(1) a').focus(() => {
    ctlanguagedropdown.css({ overflow: 'hidden', display: 'none' });
  });
  //

  // NAV
  // $('#top.main-nav section#hp-nav.top-bar-section ul').find('li').each(() => {
  //   if($(this).attr('href') === window.location.pathname){
  //     $(this).addClass('currentLink');
  //   }
  // });

  // ACTIVE NAV LINKS
  $(() => {
    // $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks li a')
    //  .filter(() => {return this.href==location.href}).parent()
    //  .addClass('currentLink').siblings().removeClass('currentLink');
    $('#top.main-nav nav section#hp-nav.top-bar-section > .parentLinks > li:nth-child(1) a').click(function () {
      $(this).parent().addClass('currentLink').siblings()
        .removeClass('currentLink');
      $('.parentLinks li ul li').removeClass('currentLink');
    });

    $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks li ul li a').click(() => {
      // $(this).parent().addClass('currentLink').siblings().removeClass('currentLink');
      $('.parentLinks li ul li').removeClass('currentLink');
    });

    $('.parentLinks > li > ul > li a').click(function () {
      $(this).parent().addClass('currentLink');
      $(this).parent().addClass('currentLink')
        .parent()
        .parent()
        .addClass('currentLink')
        .siblings()
        .removeClass('currentLink');
      // $('.parentLinks > li > ul > li a').parent().siblings().removeClass('currentLink');
    });

    // if($('.parentLinks > li.brandingLink > ul > li a').focus()) {
    //   $('.brandingLink').addClass('currentLink').siblings().removeClass('currentLink');
    // } else if($('.parentLinks > li.languageLink > ul > li a').focus()) {
    //   $('.languageLink').addClass('currentLink').siblings().removeClass('currentLink');
    // } else if($('.parentLinks > li.layoutLink > ul > li a').focus()) {
    //   $('.layoutLink').addClass('currentLink').siblings().removeClass('currentLink');
    // }
  });

  const mn = $('#top');
  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      mn.addClass('slideInUp');
    } else {
      mn.removeClass('slideInUp');
    }
  });

  const dropdownBranding = $('.brandingLink ul');
  const dropdownLanguage = $('.languageLink ul');
  const dropdownLayout = $('.layoutLink ul');

  // let dropdownMainDisplay = $('.brandingLink ul').css({display: 'none', opacity: '0'});
  let brandingLink = $('.brandingLink');
  let languageLink = $('.languageLink');
  let layoutLink = $('.layoutLink');
  // const linkTarget = $('#top.main-nav section#hp-nav.top-bar-section ul li a');

  function dropdownBrandingBlock() {
    dropdownBranding.css({ display: 'block', 'z-index': '1100' }).stop().animate({ opacity: '1', 'margin-top': '2%' }, 200);
  }

  function dropdownLanguageBlock() {
    dropdownLanguage.css({ display: 'block', 'z-index': '1100' }).stop().animate({ opacity: '1', 'margin-top': '2%' }, 200);
  }

  function dropdownLayoutBlock() {
    dropdownLayout.css({ display: 'block', 'z-index': '1100' }).stop().animate({ opacity: '1', 'margin-top': '2%' }, 200);
  }

  function dropdownBrandingNone() {
    dropdownBranding.stop().animate({ opacity: '0', 'margin-top': '-6%' }, 200,
      () => {
        dropdownBranding.css('display', 'none');
      });
  }

  function dropdownLanguageNone() {
    dropdownLanguage.stop().animate({ opacity: '0', 'margin-top': '-6%' }, 200,
      () => {
        dropdownLanguage.css('display', 'none');
      });
  }

  function dropdownLayoutNone() {
    dropdownLayout.stop().animate({ opacity: '0', 'margin-top': '-6%' }, 200,
      () => {
        dropdownLayout.css('display', 'none');
      });
  }

  brandingLink.on('keydown', (event) => {
    const keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode === 9) {
      dropdownBrandingBlock();
    }
  });

  languageLink.on('keydown', (event) => {
    const keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode === 9) {
      dropdownLanguageBlock();
    }
  });

  layoutLink.on('keydown', (event) => {
    const keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode === 9) {
      dropdownLayoutBlock();
    }
  });

  $('.brandingLink > ul > li:nth-child(5) a').focusout(() => {
    dropdownBrandingNone();
  });

  $('.parentLinks > li:nth-child(1) a').focus(() => {
    dropdownBrandingNone();
  });

  $('.brandingLink a').focus(() => {
    dropdownBrandingBlock();
  });

  $('.languageLink > ul > li:nth-child(2) a').focusout(() => {
    dropdownLanguageNone();
  });

  $('.parentLinks > li:nth-child(2) a').focus(() => {
    dropdownLanguageNone();
  });

  $('.languageLink a').focus(() => {
    dropdownLanguageBlock();
  });

  $('.layoutLink > ul > li:nth-child(4) a').focusout(() => {
    dropdownLayoutNone();
  });

  $('.parentLinks > li:nth-child(3) a').focus(() => {
    dropdownLayoutNone();
  });

  $('.layoutLink a').focus(() => {
    dropdownLayoutBlock();
  });

  const dropLinks = (linkAdd, dropAdd) => {
    const linkDrop = {};

    linkDrop.linkAdd = linkAdd;
    linkDrop.dropAdd = dropAdd;

    linkDrop.linkFunc = () => {
      linkDrop.linkAdd.mouseenter(() => {
        $(linkDrop.dropAdd).css({ display: 'block', 'z-index': '1100' }).stop().animate({ opacity: '1', 'margin-top': '2%' }, 200);
      });

      linkDrop.linkAdd.mouseleave(() => {
        $(linkDrop.dropAdd).stop().animate({ opacity: '0', 'margin-top': '-6%' }, 200,
          () => {
            $(linkDrop.dropAdd).css('display', 'none');
          });
      });
    };

    return linkDrop;
  };

  brandingLink = dropLinks(brandingLink, dropdownBranding).linkFunc();
  languageLink = dropLinks(languageLink, dropdownLanguage).linkFunc();
  layoutLink = dropLinks(layoutLink, dropdownLayout).linkFunc();

  $('#top.main-nav section#hp-nav.top-bar-section ul.left').find('li a').each(() => {
    $(this).toggleClass('currentLink', $(this).attr('href') === window.location.pathname);
  });

  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(() => {
    $(this).toggleClass('open');
  });
  //

  $(window).scroll((event) => {
    if ($(window).scrollTop() > 0) {
      $('.logoH1').stop().animate({ 'margin-top': '-70px', opacity: '0' }, 300,
        () => {
          $('.logoH1').css('display', 'none');
        });
    }
  });

  $(window).scroll((event) => {
    if ($(window).scrollTop() === 0) {
      $('.logoH1').css('display', 'block').stop().animate({ 'margin-top': '0', opacity: '1' }, 500);
    }
  });

  $(window).scroll((event) => {
    if ($(window).scrollTop() > 950) {
      $('.bckWrap').stop().animate({ opacity: '0', display: 'none' }, 500);
    }

    if ($(window).scrollTop() < 950) {
      $('.bckWrap').stop().animate({ opacity: '1', display: 'block' }, 200);
    }
  });

  $('.downloadBTN').on('mouseover', () => {
    $(this).css({ 'background-color': '#244690', transition: 'background-color 300ms ease-in-out' });
  });

  $('.downloadBTN').on('mouseout', () => {
    $(this).css({ 'background-color': '#E90101', transition: 'background-color 300ms ease-in-out' });
  });

  // const homeBTN = $('#top.main-nav section#hp-nav.top-bar-section
  //  ul li[title='Shelby County Schools Pre-K Home']');
  //
  // homeBTN.click(() => {
  //   const reload = setTimeout(() => {
  //     window.location.reload();
  //   }, 1);
  //
  //   if ($(window).scrollTop() > 950) {
  //     clearTimeout(reload);
  //   }
  // });

  // jQuery version of hover effect
  // const panel = $('.panelWrap section article');
  //
  // panel.on('mouseover', () => {
  //   $(this).css({'background-color': '#eae8e8',
  //    'box-shadow': '0 3px 10px rgb(0 0 0 / 0.2)',
  //    transition: 'background-color 300ms, box-shadow 300ms ease-in-out'});
  //   $(this).find('section h3, section h3 figure .MuiSvgIcon-root')
  //    .css({'color': '#F7DA47', transition: 'color 300ms, ease-in-out'});
  // });
  //
  // panel.on('mouseout', () => {
  //   panel.css({'background-color': '#FFF', 'box-shadow': 'none',
  //    transition: 'background-color 300ms, box-shadow 300ms ease-in-out'});
  //   $(this).find('section h3, section h3 figure .MuiSvgIcon-root')
  //    .css({'color': '#FFF', transition: 'color 300ms, ease-in-out'});
  // });

  // Vanilla JS version of hover effect
  // const panel = document.querySelectorAll('.sectionWrap');
  // console.log('panel: ', panel);
  //
  // if (panel) {
  //   const panelHover = document.querySelectorAll('.panelWrap');
  //   console.log('panelHover: ', panelHover);
  //
  //   const panelArticle = document.querySelectorAll('.articlePanel');
  //   console.log('panelArticle: ', panelArticle);
  //
  //   for (let i = 0; i < panelArticle.length; i += 1) {
  //     const secH3 = panelArticle[i].querySelector('section h3');
  //     console.log('secH3: ', secH3);
  //     const icon = secH3.querySelector('figure .MuiSvgIcon-root');
  //     console.log('icon: ', icon);
  //
  //     const mouseoverArticle = () => {
  //       panelArticle[i].style.backgroundColor = '#EAE8E8';
  //       panelArticle[i].style.boxShadow = '0 3px 10px rgb(0 0 0 / 0.2)';
  //       panelArticle[i].style.transition = 'background-color 300ms,
  //        box-shadow 300ms ease-in-out';
  //
  //       secH3.style.color = '#F7DA47';
  //       secH3.style.transition = 'color 300ms ease-in-out';
  //
  //       icon.style.color = '#F7DA47';
  //       icon.style.transition = 'color 300ms ease-in-out';
  //     };
  //
  //     const mouseoutArticle = () => {
  //       panelArticle[i].style.backgroundColor = '#FFF';
  //       panelArticle[i].style.boxShadow = 'none';
  //       panelArticle[i].style.transition = 'background-color 300ms,
  //        box-shadow 300ms ease-in-out';
  //
  //       secH3.style.color = '#FFF';
  //       secH3.style.transition = 'color 300ms ease-in-out';
  //
  //       icon.style.color = '#FFF';
  //       icon.style.transition = 'color 300ms ease-in-out';
  //     };
  //
  //     panelArticle[i].addEventListener('mouseover', mouseoverArticle);
  //     panelArticle[i].addEventListener('mouseout', mouseoutArticle);
  //   }
  // }

  // const homeBTN = $('#top.main-nav section#hp-nav.top-bar-section
  //  ul li[title='SCS Design System']');
  //
  // homeBTN.click(() => {
  //   const reload = setTimeout(() => {
  //     window.location.reload();
  //   }, 1);
  //
  //   if ($(window).scrollTop() > 950) {
  //     clearTimeout(reload);
  //   }
  // });

  // const colorHover = $('.colorUse .panelColorWrap > section > article section article figure');
  //
  // colorHover.on('mouseover', () => {
  //   $(this).css({'width': '500px', transition: 'width 300ms ease-in-out'});
  // });
  //
  // colorHover.on('mouseout', () => {
  //   $(this).css({'width': '100%', transition: 'width 300ms ease-in-out'});
  // });
});
