/* ================================================================
   JELAJAH GRESIK — VIRTUAL TOUR 360° v4
   Data destinasi terpusat di TOUR_DATA. Ganti data + file panorama
   tanpa perlu mengubah logika UI.

   NAMA : [ISI NAMA]
   NIM  : [ISI NIM]
   KELAS: IF209
   MATA KULIAH: Pemrograman Web 1
   ================================================================ */

const SETTINGS = {
  title: 'Jelajah Gresik',
  subtitle: 'Rasakan pengalaman menjelajah destinasi Gresik secara imersif.',
  startScene: 'home',
  homeScene: 'home',
  logo: 'assets/logo/logo.svg',
  backgroundAudio: 'assets/audio/jelajah-gresik-sample.wav',
  autoRotate: true,
  autoRotateDelay: 5000,
  autoRotateSpeed: 1.5
};

/* ================================================================
   DATA UTAMA — BAGIAN INI YANG PALING SERING KAMU EDIT
   image = FOTO 360 equirectangular 2:1
   thumb = thumbnail biasa/360
   source = sumber materi
   mapPosition = posisi pin dalam persen pada denah
   hotspots = titik interaktif di dalam panorama
   ================================================================ */
const TOUR_DATA = {
  home: {
    title: 'Selamat Datang di Gresik', category: 'Beranda', description: 'Pintu masuk virtual untuk menjelajahi destinasi alam, bahari, religi, budaya, dan wisata buatan di Kabupaten Gresik.',
    image: 'assets/panoramas/home.jpg', thumb: 'assets/panoramas/home.jpg',
    initialView: { pitch: 0, yaw: 0, hfov: 105 },
    menu: [
      {number:'01', label:'Setigi Gresik', sceneId:'setigi', pitch:12, yaw:-52},
      {number:'02', label:'Lontar Sewu', sceneId:'lontarSewu', pitch:7, yaw:-52},
      {number:'03', label:'Pantai Dalegan', sceneId:'dalegan', pitch:2, yaw:-52},
      {number:'04', label:'Makam Sunan Gresik', sceneId:'malikIbrahim', pitch:-3, yaw:-52},
      {number:'05', label:'Pulau Bawean', sceneId:'bawean', pitch:-8, yaw:-52},
      {number:'06', label:'Telaga Ngipik', sceneId:'ngipik', pitch:-13, yaw:-52},
      {number:'07', label:'Giri Kedaton', sceneId:'giriKedaton', pitch:-18, yaw:-52},
      {number:'08', label:'Banyuurip Mangrove Center', sceneId:'banyuurip', pitch:-23, yaw:-52},
      {number:'09', label:'Wisata Bajak Laut', sceneId:'bajakLaut', pitch:-28, yaw:-52},
      {number:'10', label:'Gili Noko', sceneId:'giliNoko', pitch:-33, yaw:-52},
      {number:'11', label:'Wisata Jati Sewu', sceneId:'jatiSewu', pitch:-38, yaw:-52},
      {number:'12', label:'WGP Dinopark', sceneId:'wgpDinopark', pitch:-43, yaw:-52}
    ], hotspots: []
  },

  setigi: { title:'Setigi Gresik', category:'Alam', description:'Kawasan wisata bekas tambang yang dikembangkan menjadi destinasi dengan bukit batu kapur, telaga, dan berbagai elemen edutainment.', area:'Sekapuk, Panceng', ticket:'Rp15.000 dewasa*', hours:'08.00–17.00 WIB', image:'assets/panoramas/setigi.jpg', thumb:'assets/panoramas/setigi.jpg', mapPosition:{x:22,y:28}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[
    {type:'photo', pitch:7, yaw:-28, text:'Foto detail', image:'assets/images/setigi-detail.jpg', caption:'Contoh hotspot foto. Ganti dengan foto dokumentasi Setigi kamu.'},
    {type:'video', pitch:-4, yaw:38, text:'Video', video:'assets/videos/jelajah-gresik-sample.mp4'}
  ] },
  lontarSewu: { title:'Lontar Sewu', category:'Buatan', description:'Eduwisata keluarga di Desa Hendrosari dengan beragam wahana rekreasi untuk anak dan orang dewasa.', area:'Hendrosari, Menganti', ticket:'Mulai Rp8.000*', hours:'08.00–21.00 WIB', image:'assets/panoramas/lontar-sewu.jpg', thumb:'assets/panoramas/lontar-sewu.jpg', mapPosition:{x:31,y:61}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  dalegan: { title:'Pantai Dalegan', category:'Bahari', description:'Pantai utara Gresik dengan area pasir dan aktivitas rekreasi air yang populer untuk wisata keluarga.', area:'Dalegan, Panceng', ticket:'Rp10.000*', hours:'07.00–17.00 WIB', image:'assets/panoramas/dalegan.JPG', thumb:'assets/panoramas/dalegan.JPG', mapPosition:{x:16,y:23}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[
    {type:'photo', pitch:8, yaw:30, image:'assets/images/dalegan-detail.jpg', caption:'Contoh hotspot foto Pantai Dalegan.'}
  ] },
  malikIbrahim: { title:'Makam Sunan Gresik', category:'Religi', description:'Kompleks makam Maulana Malik Ibrahim di kawasan Gapuro Sukolilo, salah satu tujuan wisata religi yang dikenal di Gresik.', area:'Gapuro Sukolilo, Gresik', ticket:'Gratis*', hours:'24 jam*', image:'assets/panoramas/malik-ibrahim.jpg', thumb:'assets/panoramas/malik-ibrahim.jpg', mapPosition:{x:51,y:53}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  bawean: { title:'Pulau Bawean', category:'Bahari', description:'Pulau di wilayah Kabupaten Gresik dengan ragam lanskap seperti pantai, Danau Kastoba, dan air terjun.', area:'Bawean', ticket:'Gratis*', hours:'24 jam*', image:'assets/panoramas/bawean.jpg', thumb:'assets/panoramas/bawean.jpg', mapPosition:{x:80,y:19}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  ngipik: { title:'Telaga Ngipik', category:'Alam', description:'Telaga di tengah kawasan industri Gresik yang cocok untuk bersantai, piknik, dan menikmati suasana sore.', area:'Ngipik, Gresik', ticket:'Gratis + parkir*', hours:'24 jam*', image:'assets/panoramas/ngipik.jpg', thumb:'assets/panoramas/ngipik.jpg', mapPosition:{x:55,y:62}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  giriKedaton: { title:'Giri Kedaton', category:'Budaya', description:'Situs yang dalam sumber Disparekrafbudpora dijelaskan sebagai kedaton atau pusat pemerintahan era Giri yang terkait dengan Sunan Giri.', area:'Kebomas, Gresik', ticket:'Cek pengelola', hours:'Cek pengelola', image:'assets/panoramas/giri-kedaton.jpg', thumb:'assets/panoramas/giri-kedaton.jpg', mapPosition:{x:48,y:42}, source:'https://disparekrafbudpora.gresikkab.go.id/category/gresik-wisata-budaya', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  banyuurip: { title:'Banyuurip Mangrove Center', category:'Ekowisata', description:'Ekowisata mangrove di Ujung Pangkah yang menawarkan unsur edukasi, konservasi, dan rekreasi.', area:'Banyuurip, Ujungpangkah', ticket:'Menyesuaikan paket*', hours:'08.00–16.00*', image:'assets/panoramas/banyuurip.JPG', thumb:'assets/panoramas/banyuurip.JPG', mapPosition:{x:72,y:38}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  bajakLaut: { title:'Wisata Bajak Laut', category:'Buatan', description:'Waterpark keluarga di Desa Masangan dengan permainan air dan seluncur yang menjadi salah satu daya tariknya.', area:'Masangan, Bungah', ticket:'Rp10.000–15.000*', hours:'08.00–17.00 WIB*', image:'assets/panoramas/bajak-laut.jpg', thumb:'assets/panoramas/bajak-laut.jpg', mapPosition:{x:65,y:35}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  giliNoko: { title:'Pulau Gili Noko', category:'Bahari', description:'Pulau kecil di wilayah Bawean yang dikenal dengan pasir putih dan aktivitas snorkeling.', area:'Sidogedungbatu, Sangkapura', ticket:'Gratis*', hours:'24 jam*', image:'assets/panoramas/gili-noko.jpg', thumb:'assets/panoramas/gili-noko.jpg', mapPosition:{x:86,y:28}, source:'https://travel.detik.com/domestic-destination/d-7463296/10-wisata-gresik-yang-sayang-dilewatkan-keindahan-alam-hingga-sejarah', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  jatiSewu: { title:'Wisata Jati Sewu', category:'Buatan', description:'Wisata buatan dengan wahana rekreasi yang berada dalam latar hutan jati dan ditujukan untuk berbagai kalangan.', area:'Gresik', ticket:'Cek pengelola', hours:'Cek pengelola', image:'assets/panoramas/jati-sewu.jpg', thumb:'assets/panoramas/jati-sewu.jpg', mapPosition:{x:38,y:73}, source:'https://disparekrafbudpora.gresikkab.go.id/category/gresik-wisata-buatan', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] },
  wgpDinopark: { title:'WGP Dinopark', category:'Buatan', description:'Wisata Gunung Pundut yang memadukan suasana alam dengan tema dinosaurus sebagai pengalaman rekreasi.', area:'Gunung Pundut, Gresik', ticket:'Cek pengelola', hours:'Cek pengelola', image:'assets/panoramas/wgp-dinopark.jpg', thumb:'assets/panoramas/wgp-dinopark.jpg', mapPosition:{x:29,y:35}, source:'https://disparekrafbudpora.gresikkab.go.id/category/gresik-wisata-buatan', initialView:{pitch:0,yaw:0,hfov:105}, hotspots:[] }
};

let viewer=null, currentScene=SETTINGS.startScene, rotateTimer=null, isRotating=false, gyroEnabled=false, activeCategory='Semua', favorites=new Set(JSON.parse(localStorage.getItem('gresik-favorites')||'[]')), favoritesOnly=false;
const $=id=>document.getElementById(id);

const splash=$('splash'), loading=$('loading'), bgAudio=$('bgAudio');
$('splashTitle').textContent=SETTINGS.title; $('splashSubtitle').textContent=SETTINGS.subtitle; $('splashLogo').src=SETTINGS.logo;

function escapeHtml(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function destinations(){return Object.entries(TOUR_DATA).filter(([id])=>id!=='home');}
function categories(){return ['Semua',...new Set(destinations().map(([,s])=>s.category))];}
function showToast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>t.classList.remove('show'),2200);}
function favorite(id){if(favorites.has(id))favorites.delete(id);else favorites.add(id);localStorage.setItem('gresik-favorites',JSON.stringify([...favorites]));renderSceneList();updateFavoriteUI();}
function isFav(id){return favorites.has(id)}
function renderFilters(){ $('categoryFilters').innerHTML=categories().map(c=>`<button class="chip ${c===activeCategory?'active':''}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join(''); document.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;renderFilters();renderSceneList();}); }
function renderSceneList(){const q=$('searchInput').value.trim().toLowerCase();const list=destinations().filter(([id,s])=>(activeCategory==='Semua'||s.category===activeCategory)&&(!favoritesOnly||isFav(id))&&(`${s.title} ${s.category} ${s.area||''}`.toLowerCase().includes(q)));$('sceneList').innerHTML=list.map(([id,s],i)=>`<article class="scene-card ${currentScene===id?'active':''}" data-id="${id}"><img src="${s.thumb}" alt="${escapeHtml(s.title)}" onerror="this.src='assets/panoramas/fallback.jpg'"><div><span class="scene-num">${String(i+1).padStart(2,'0')} · ${escapeHtml(s.category)}</span><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.area||'Kabupaten Gresik')}</p></div><button class="fav-mini ${isFav(id)?'active':''}" data-fav="${id}" aria-label="Favorit"><i class="fa-${isFav(id)?'solid':'regular'} fa-heart"></i></button></article>`).join('')||`<div style="padding:28px;text-align:center;color:#8196a5;font-size:12px">Tidak ada destinasi yang cocok.</div>`;document.querySelectorAll('.scene-card').forEach(c=>c.onclick=e=>{if(e.target.closest('[data-fav]'))return;goToScene(c.dataset.id);closeSidebar()});document.querySelectorAll('[data-fav]').forEach(b=>b.onclick=e=>{e.stopPropagation();favorite(b.dataset.fav)});$('favoriteCount').textContent=`${favorites.size} favorit`;}
function updateFavoriteUI(){const fav=$('favoriteBtn'),detailFav=$('detailFavorite');if(isFav(currentScene)){fav.innerHTML='<i class="fa-solid fa-heart"></i>';fav.style.color='var(--danger)';detailFav.innerHTML='<i class="fa-solid fa-heart"></i> Tersimpan';}else{fav.innerHTML='<i class="fa-regular fa-heart"></i>';fav.style.color='';detailFav.innerHTML='<i class="fa-regular fa-heart"></i> Favorit';} }

function buildPannellum(){const scenes={};Object.entries(TOUR_DATA).forEach(([id,s])=>{const hs=[];(s.hotspots||[]).forEach(h=>{if(h.type==='scene')hs.push({type:'scene',pitch:h.pitch,yaw:h.yaw,text:h.text||'Pindah lokasi',sceneId:h.sceneId,cssClass:'hotspot-nav',createTooltipFunc:(el,args)=>{el.innerHTML='<i class="fa-solid fa-arrow-right"></i>'}});if(h.type==='info')hs.push({type:'info',pitch:h.pitch,yaw:h.yaw,cssClass:'hotspot-info',createTooltipFunc:el=>el.innerHTML='<i class="fa-solid fa-info"></i>',clickHandlerFunc:()=>openInfo(h)});if(h.type==='photo')hs.push({type:'info',pitch:h.pitch,yaw:h.yaw,cssClass:'hotspot-photo',createTooltipFunc:el=>el.innerHTML='<i class="fa-solid fa-image"></i>',clickHandlerFunc:()=>openPhoto(h)});if(h.type==='video')hs.push({type:'info',pitch:h.pitch,yaw:h.yaw,cssClass:'hotspot-video',createTooltipFunc:el=>el.innerHTML='<i class="fa-solid fa-video"></i>',clickHandlerFunc:()=>openVideo(h)});});(s.menu||[]).forEach(m=>hs.push({type:'info',pitch:m.pitch,yaw:m.yaw,cssClass:'hotspot-menu',createTooltipFunc:el=>el.textContent=`${m.number}  ${m.label}`,clickHandlerFunc:()=>goToScene(m.sceneId)}));scenes[id]={title:s.title,type:'equirectangular',panorama:s.image,pitch:s.initialView?.pitch??0,yaw:s.initialView?.yaw??0,hfov:s.initialView?.hfov??105,autoLoad:true,hotSpots:hs};});return {default:{firstScene:SETTINGS.startScene,showControls:false,autoLoad:true,minHfov:45,maxHfov:120},scenes};}

function init(){loading.classList.remove('is-hidden');viewer=pannellum.viewer('viewer',buildPannellum());viewer.on('load',()=>{loading.classList.add('is-hidden');resetRotate();updateHUD()});viewer.on('scenechange',id=>{currentScene=id;updateSceneUI();renderSceneList();resetRotate();});viewer.on('error',e=>{loading.classList.add('is-hidden');showToast('Panorama gagal dimuat. Periksa nama file foto 360.');console.error(e)});['mousedown','touchstart','wheel'].forEach(ev=>$('viewer').addEventListener(ev,()=>{if(isRotating)stopRotate();resetRotate()},{passive:true}));setInterval(updateHUD,250);buildMap();updateSceneUI();}
function goToScene(id){if(!viewer||!TOUR_DATA[id])return;viewer.loadScene(id);closeDetail();}
function updateSceneUI(){const s=TOUR_DATA[currentScene]||TOUR_DATA.home;$('sceneTitle').textContent=s.title;$('categoryPill').textContent=(s.category||'BERANDA').toUpperCase();$('sceneCount').textContent=currentScene==='home'?'HOME':`${String(destinations().findIndex(([id])=>id===currentScene)+1).padStart(2,'0')} / ${destinations().length}`;updateFavoriteUI();updateDetail();updateHUD();document.querySelectorAll('.scene-card').forEach(c=>c.classList.toggle('active',c.dataset.id===currentScene));document.querySelectorAll('.map-pin').forEach(p=>p.classList.toggle('active',p.dataset.id===currentScene));}
function updateHUD(){if(!viewer)return;let yaw=((viewer.getYaw()%360)+360)%360;$('yawReadout').textContent=`${Math.round(yaw)}°`;let idx=destinations().findIndex(([id])=>id===currentScene);$('progressFill').style.width=currentScene==='home'?'0%':`${((idx+1)/destinations().length)*100}%`;}
function resetRotate(){clearTimeout(rotateTimer);if(isRotating)stopRotate();if(SETTINGS.autoRotate)rotateTimer=setTimeout(startRotate,SETTINGS.autoRotateDelay)}
function startRotate(){if(!viewer||isRotating)return;viewer.startAutoRotate(SETTINGS.autoRotateSpeed);isRotating=true;$('rotateBtn').classList.add('active');}
function stopRotate(){viewer?.stopAutoRotate();isRotating=false;$('rotateBtn').classList.remove('active');}

function updateDetail(){const s=TOUR_DATA[currentScene]||TOUR_DATA.home;$('detailImage').src=s.thumb||s.image;$('detailTitle').textContent=s.title;$('detailCategory').textContent=s.category||'Beranda';$('detailDescription').textContent=s.description||'';$('detailTicket').textContent=s.ticket||'—';$('detailHours').textContent=s.hours||'—';$('detailArea').textContent=s.area||'Gresik';$('detailSource').href=s.source||'https://disparekrafbudpora.gresikkab.go.id/';}
function openDetail(){if(currentScene==='home'){openHow();return}$('detailPanel').classList.add('open');$('detailPanel').setAttribute('aria-hidden','false');stopRotate()}
function closeDetail(){$('detailPanel').classList.remove('open');$('detailPanel').setAttribute('aria-hidden','true');}
function openInfo(h){$('modalContent').innerHTML=`<span class="eyebrow">INFORMASI</span><h3>${escapeHtml(h.title||'Informasi')}</h3><p>${escapeHtml(h.text||'')}</p>`;$('modal').classList.remove('is-hidden');stopRotate()}
function openPhoto(h){$('modalContent').innerHTML=`<img src="${h.image}" style="width:100%;border-radius:14px;max-height:65vh;object-fit:contain"><p>${escapeHtml(h.caption||'')}</p>`;$('modal').classList.remove('is-hidden');stopRotate()}
function openVideo(h){$('modalContent').innerHTML=`<video src="${h.video}" controls autoplay style="width:100%;border-radius:14px;max-height:65vh"></video>`;$('modal').classList.remove('is-hidden');stopRotate()}
function openHow(){$('modalContent').innerHTML=`<span class="eyebrow">PANDUAN</span><h3>Cara menggunakan Virtual Tour</h3><ul><li>Geser panorama dengan mouse atau jari untuk melihat 360°.</li><li>Gunakan roda mouse atau tombol +/− untuk zoom.</li><li>Klik hotspot panah untuk berpindah lokasi.</li><li>Gunakan menu kiri untuk mencari dan memfilter destinasi.</li><li>Gunakan Peta untuk melihat posisi pin dan tombol favorit untuk menyimpan destinasi.</li><li>Ganti foto 360 di folder <code>assets/panoramas</code>, lalu sesuaikan path pada <code>TOUR_DATA</code> di <code>script.js</code>.</li></ul>`;$('modal').classList.remove('is-hidden')}

function buildMap(){const m=$('mapMarkers');m.innerHTML=destinations().map(([id,s])=>s.mapPosition?`<button class="map-pin" data-id="${id}" style="left:${s.mapPosition.x}%;top:${s.mapPosition.y}%" title="${escapeHtml(s.title)}"><i class="fa-solid fa-location-dot"></i></button>`:'').join('');m.querySelectorAll('.map-pin').forEach(p=>p.onclick=()=>{goToScene(p.dataset.id);closeMap()});$('mapLegend').innerHTML=destinations().slice(0,12).map(([id,s],i)=>`<div class="legend-row"><span class="legend-dot"></span><span>${String(i+1).padStart(2,'0')} · ${escapeHtml(s.title)}</span></div>`).join('');}
function openSidebar(){$('sidebar').classList.add('open');$('drawerOverlay').classList.add('show');closeMap();}function closeSidebar(){$('sidebar').classList.remove('open');$('drawerOverlay').classList.remove('show');}function openMap(){$('mapPanel').classList.add('open');$('mapOverlay').classList.add('show');closeSidebar();}function closeMap(){$('mapPanel').classList.remove('open');$('mapOverlay').classList.remove('show');}
async function shareCurrent(){const s=TOUR_DATA[currentScene];const url=new URL(location.href);url.hash=currentScene;try{if(navigator.share)await navigator.share({title:s.title,text:`Jelajah ${s.title} melalui Virtual Tour 360° Gresik`,url:url.href});else{await navigator.clipboard.writeText(url.href);showToast('Link lokasi disalin.')}}catch(e){}}
function nextScene(dir=1){const ids=destinations().map(([id])=>id);let i=ids.indexOf(currentScene);if(i<0)i=0;goToScene(ids[(i+dir+ids.length)%ids.length]);}

$('startBtn').onclick=()=>{splash.classList.add('is-hidden');['topbar','hud','controls','homeBtn'].forEach(id=>$(id).classList.remove('is-hidden'));init();if(SETTINGS.backgroundAudio){bgAudio.src=SETTINGS.backgroundAudio;bgAudio.play().catch(()=>{})}};
$('howBtn').onclick=openHow;$('menuBtn').onclick=openSidebar;$('closeSidebar').onclick=closeSidebar;$('drawerOverlay').onclick=closeSidebar;$('mapBtn').onclick=openMap;$('closeMap').onclick=closeMap;$('mapOverlay').onclick=closeMap;$('infoBtn').onclick=openDetail;$('closeDetail').onclick=closeDetail;$('favoriteBtn').onclick=()=>currentScene!=='home'&&favorite(currentScene);$('detailFavorite').onclick=()=>currentScene!=='home'&&favorite(currentScene);$('shareBtn').onclick=shareCurrent;$('detailShare').onclick=shareCurrent;$('searchInput').oninput=renderSceneList;$('favoritesOnly').onclick=()=>{favoritesOnly=!favoritesOnly;$('favoritesOnly').style.color=favoritesOnly?'var(--accent)':'';renderSceneList()};$('zoomIn').onclick=()=>{stopRotate();viewer?.setHfov(Math.max(45,viewer.getHfov()-10),180)};$('zoomOut').onclick=()=>{stopRotate();viewer?.setHfov(Math.min(120,viewer.getHfov()+10),180)};$('rotateBtn').onclick=()=>isRotating?stopRotate():startRotate();$('fullscreenBtn').onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.();$('prevBtn').onclick=()=>nextScene(-1);$('nextBtn').onclick=()=>nextScene(1);$('homeBtn').onclick=()=>goToScene(SETTINGS.homeScene);$('audioBtn').onclick=()=>{if(!SETTINGS.backgroundAudio){showToast('Belum ada musik latar. Isi SETTINGS.backgroundAudio.');return}if(bgAudio.paused){bgAudio.play();$('audioBtn').innerHTML='<i class="fa-solid fa-volume-high"></i>'}else{bgAudio.pause();$('audioBtn').innerHTML='<i class="fa-solid fa-volume-xmark"></i>'}};$('modalClose').onclick=()=>$('modal').classList.add('is-hidden');$('modal').onclick=e=>{if(e.target===$('modal'))$('modal').classList.add('is-hidden')};

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSidebar();closeMap();closeDetail();$('modal').classList.add('is-hidden')}if(e.key==='ArrowRight')nextScene(1);if(e.key==='ArrowLeft')nextScene(-1);if(e.key==='f'||e.key==='F')document.documentElement.requestFullscreen?.();});
renderFilters();renderSceneList();
