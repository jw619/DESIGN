// 각 디자인 이름에 해당하는 이미지 경로를 객체로 매핑
const cardDesigns = {
  design1: ' Screenshot20230831154903Google.jpg',
  design2: 'Screenshot20230905170203NAVER.jpg',
  design3: 'Screenshot20240101123819NAVER.jpg'
  // 추가적인 카드 디자인 경로
};

function showCardDesign() {
  // 사용자가 선택한 카드 디자인을 가져옴
  var selectedDesign = document.getElementById('cardDesign').value;
  // 해당 디자인의 이미지 경로를 가져옴
  var imagePath = cardDesigns[selectedDesign];
  
  // 이미지를 표시할 div를 가져옴
  var imageDisplay = document.getElementById('cardImageDisplay');
  // div 내용을 업데이트하여 이미지를 표시
  imageDisplay.innerHTML = `<img src="${imagePath}" alt="Card Design">`;
}
document.getElementById('cardImage').src = imagePath;
window.onload = showCardDesign;
