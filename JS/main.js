// 장바구니
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', function(event){
  event.stopPropagation()
  if(basketEl.classList.contains('show')) //return true , false 
    {//hide
      hideBasket();
    }
  else {//show
      showBasket();
    }
})

window.addEventListener('click',function(){
  hideBasket();
})

basketEl.addEventListener('click',function(event){
  event.stopPropagation();
})

function showBasket(){
  basketEl.classList.add('show')
}

function hideBasket(){
  basketEl.classList.remove('show')
}


//검색
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click',showSearch)
searchCloserEl.addEventListener('click',hideSearch)
searchShadowEl.addEventListener('click',hideSearch)

function showSearch() {
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed')
  headerMenuEls.reverse().forEach(function(el,index){
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.forEach(function(el,index){
    el.style.transitionDelay = index * .2 / searchDelayEls.length + 's'
  })
  setTimeout(function(){
    searchInputEl.focus();
  },600)

}

function hideSearch() {
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed')
  headerMenuEls.reverse().forEach(function(el,index){
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  })

  searchDelayEls.reverse().forEach(function(el,index){
    el.style.transitionDelay = index * .2 / searchDelayEls.length + 's'
  })
  searchDelayEls.reverse()
  searchInputEl.value=''
}

//요소의 가시성 관찰
const io = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(!entry.isIntersecting){ 
      entry.target.classList.remove('show')
      return
     }
    entry.target.classList.add('show')
  })
})

const infoEls = document.querySelectorAll('.info')
infoEls.forEach(function (el) {
  io.observe(el)
})