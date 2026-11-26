/* hyonanest 공부 (2026-11-27): UI·UX 용어 · 그래프 용어. 용어마다 뜻 · 언제 · 예시 · AI에게 말하기 · 외웠어요 */
(function () {
var B = '#3182f6';
function fld(txt, cls, extra) { return '<div class="sd-f ' + (cls || '') + '"><span>' + (txt || '') + '</span>' + (extra || '') + '</div>'; }
function win(body, nav) { return '<div class="sd-win"><div class="sd-nav"><b>HOME</b><span>서비스</span><span>소개</span><span>문의</span></div>' + body + '</div>'; }
function phone(body) { return '<div class="sd-ph">' + body + '</div>'; }
var CK = '<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>';
var CV = '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';

/* 차트 공통: 막대 차트 하나에 부품을 강조 */
function partChart(hi) {
  var o = function (k) { return hi === k ? ' class="hl"' : ''; };
  return '<svg class="sd-chart" viewBox="0 0 220 120">' +
    '<g' + o('grid') + ' stroke="#e5e8eb">' + [20, 45, 70].map(function (y) { return '<line x1="30" x2="210" y1="' + y + '" y2="' + y + '"/>'; }).join('') + '</g>' +
    '<g' + o('axis') + ' stroke="#8b95a1" stroke-width="1.5"><line x1="30" y1="10" x2="30" y2="95"/><line x1="30" y1="95" x2="210" y2="95"/></g>' +
    '<g fill="#8b95a1" font-size="8"><text x="40" y="106">1월</text><text x="80" y="106">2월</text><text x="120" y="106">3월</text><text x="160" y="106">4월</text><text x="6" y="23">300</text><text x="6" y="73">100</text></g>' +
    '<g fill="' + B + '"><rect x="38" y="55" width="20" height="40" rx="3"/><rect x="78" y="35" width="20" height="60" rx="3"/><rect x="118" y="45" width="20" height="50" rx="3"/><rect x="158" y="22" width="20" height="73" rx="3"/></g>' +
    '<g' + o('label') + ' fill="#191f28" font-size="8" font-weight="700"><text x="41" y="51">160</text><text x="81" y="31">240</text><text x="121" y="41">200</text><text x="161" y="18">290</text></g>' +
    '<g' + o('legend') + ' font-size="8" fill="#4e5968"><rect x="40" y="2" width="7" height="7" rx="2" fill="' + B + '"/><text x="50" y="9">매출</text></g>' +
    (hi === 'tip' ? '<g class="hl"><rect x="96" y="6" width="60" height="22" rx="5" fill="#191f28"/><text x="103" y="20" fill="#fff" font-size="8">2월 · 240만원</text><path d="M96 26l-6 6 10-2z" fill="#191f28"/></g>' : '') +
    '</svg>';
}

var CATS = [
  { k: 's-ctl', t: '선택·입력', d: '값을 고르거나 입력하는 부품' },
  { k: 's-state', t: '입력 상태', d: '입력 칸이 지금 어떤 상태인지 보여 주는 말' },
  { k: 's-fb', t: '안내·피드백', d: '알림 · 도움말 · 기다림 · 진행을 보여 주는 부품' },
  { k: 's-lay', t: '화면 구조', d: '페이지 뼈대와 이동 방법' },
  { k: 's-mo', t: '움직임', d: '나타나고 바뀌고 반응하는 애니메이션' },
  { k: 's-chart', t: '차트', d: '데이터를 그림으로 보여 주는 그래프 종류와 부품' },
  { k: 's-quiz', t: '퀴즈', d: '뜻을 보고 용어 맞히기' }
];

/* [키, 이름, 영문, 뜻, 언제 쓰나, AI에게 말하기, 예시 HTML] */
var T = {
's-ctl': [
 ['checkbox', '체크박스', 'Checkbox', '여러 항목을 동시에 고르는 네모 칸', '관심사 고르기, 약관 동의처럼 여러 개를 함께 선택할 때', '관심사 3개를 체크박스로 여러 개 고를 수 있게 해 줘.',
  '<label class="sd-o"><input type="checkbox" checked> 프로덕트 디자인</label><label class="sd-o"><input type="checkbox"> 모션 그래픽</label><label class="sd-o"><input type="checkbox"> 브랜딩</label>'],
 ['radio', '라디오 버튼', 'Radio Button', '여러 선택지 중 딱 하나만 고르는 동그라미', '배송 방법, 결제 수단처럼 하나만 골라야 할 때', '배송 방법을 라디오 버튼으로 하나만 고르게 해 줘. 옵션마다 가격과 기간을 작게 적어 줘.',
  '<label class="sd-o"><input type="radio" name="sdr" checked><span>일반 배송<small>무료 · 2~3일</small></span></label><label class="sd-o"><input type="radio" name="sdr"><span>빠른 배송<small>3,000원 · 내일</small></span></label>'],
 ['toggle', '토글 스위치', 'Toggle Switch', '켜짐과 꺼짐을 바로 바꾸는 스위치', '알림 켜기·끄기처럼 누르는 즉시 적용되는 설정', '알림 설정 화면에 항목마다 토글 스위치를 넣어 줘. 누르면 바로 켜지고 꺼지게.',
  '<div class="sd-li">새 메시지<button class="sd-tg on" data-sd="tg"></button></div><div class="sd-li">주간 리포트<button class="sd-tg" data-sd="tg"></button></div><div class="sd-li">마케팅 소식<button class="sd-tg" data-sd="tg"></button></div>'],
 ['slider', '슬라이더', 'Slider', '막대를 끌어서 이어진 범위의 값을 고름', '가격 범위, 음량, 밝기처럼 숫자를 대략 고를 때', '가격 범위를 1만~10만 원 슬라이더로 고르게 하고, 고른 값을 오른쪽 위에 보여 줘.',
  '<div class="sd-li"><b>가격 범위</b><b class="sd-bl" data-sdo>₩55K</b></div><input type="range" min="10" max="100" value="55" data-sd="rg"><div class="sd-li sd-m"><span>₩10K</span><span>₩100K</span></div>'],
 ['tab', '탭', 'Tab', '같은 화면 안에서 내용 영역을 바꿔 보는 머리표', '추천 / 내 주변처럼 같은 종류의 내용을 나눠 볼 때', '장소 목록 위에 추천 · 내 주변 탭을 만들고, 고른 탭 아래에 파란 밑줄을 그어 줘.',
  '<div class="sd-tabs" data-sd="tab"><button class="on">추천</button><button>내 주변</button></div><div class="sd-card">브루클린 카페<small>인기 장소</small></div><div class="sd-card">어반 스튜디오<small>새로 오픈</small></div>'],
 ['stepper', '스테퍼', 'Stepper', '− + 버튼으로 수량을 한 단계씩 조절', '장바구니 수량, 인원 수처럼 작은 정수를 바꿀 때', '상품 수량을 − + 스테퍼로 바꾸고, 바뀔 때마다 총 금액을 다시 계산해 줘.',
  '<div class="sd-li"><b>수량</b><span class="sd-st" data-sd="st"><button>−</button><b>2</b><button>+</button></span></div><div class="sd-li sd-m"><span>총 상품 금액</span><b class="sd-ink">36,000원</b></div>'],
 ['segment', '세그먼트 컨트롤', 'Segmented Control', '붙어 있는 버튼 묶음 중 하나를 골라 보기를 바꿈', '주간 / 월간 / 연간처럼 같은 데이터를 다르게 볼 때', '소비 내역 위에 주간 · 월간 · 연간 세그먼트 컨트롤을 넣어 줘.',
  '<div class="sd-seg" data-sd="seg"><button>주간</button><button class="on">월간</button><button>연간</button></div><div class="sd-m">이번 달 소비</div><b class="sd-big">540,000원</b>'],
 ['chip-choice', '선택 칩', 'Choice Chip', '작은 알약 모양 버튼 중 하나를 고름', '용량, 사이즈처럼 짧은 옵션 하나를 고를 때', '용량을 소형 · 중형 · 대형 선택 칩으로 하나만 고르게 해 줘.',
  '<div class="sd-m">용량 선택</div><div class="sd-chips" data-sd="one"><button>소형</button><button>중형</button><button class="on">대형</button></div>'],
 ['chip-filter', '필터 칩', 'Filter Chip', '목록에 조건을 빠르게 걸고 푸는 칩', '무료배송, 별점처럼 목록을 좁힐 때. 여러 개를 함께 켤 수 있음', '상품 목록 위에 무료배송 · 별점 · 쿠폰 필터 칩을 넣고, 켜진 칩은 파란 테두리로 보여 줘.',
  '<div class="sd-chips" data-sd="many"><button class="on">무료배송' + CV + '</button><button class="on">별점' + CV + '</button><button>쿠폰</button></div><div class="sd-card">무선 헤드폰<small>무료배송 · ★4.6</small></div>'],
 ['chip-action', '액션 칩', 'Action Chip', '누르면 작은 동작을 바로 실행하는 칩', '초기화, 공유, 복사처럼 한 번에 끝나는 동작', '입력 칸 아래에 초기화 액션 칩을 두고, 누르면 칸을 모두 비워 줘.',
  fld('<small>이름</small>입력값 없음', 'mute') + fld('<small>이메일</small>입력값 없음', 'mute') + '<div class="sd-chips"><button>초기화</button></div>'],
 ['chip-input', '입력 칩', 'Input Chip', '입력한 값을 태그로 바꿔 보여 주는 칩 (× 로 지움)', '태그, 받는 사람, 키워드처럼 여러 값을 쌓아 갈 때', '태그 입력 칸에서 엔터를 치면 입력 칩으로 바뀌고, × 를 누르면 지워지게 해 줘.',
  fld('UX/UI') + '<div class="sd-chips" data-sd="x"><button>디자인 ×</button><button>개발 ×</button><button class="on">UX/UI ×</button></div>'],
 ['combobox', '콤보박스', 'Combo Box', '글자를 입력하면서 목록에서 찾아 고르는 칸', '도시, 주소처럼 후보가 많아서 검색이 필요할 때', '해외 도시를 검색하는 콤보박스를 만들어 줘. 글자를 입력하면 맞는 도시 목록이 뜨고 고를 수 있게.',
  fld('파<i class="sd-caret"></i>', 'on', CV) + '<div class="sd-dd"><div>파리</div><div>프라하</div><div>파타야</div></div>'],
 ['select', '셀렉트', 'Select · Dropdown', '눌러서 펼친 목록에서 하나를 고르는 칸', '선택지가 5개 이상이라 라디오로는 길어질 때', '배송 방법을 셀렉트로 만들어 줘. 펼치면 고른 항목에 체크 표시가 보이게.',
  fld('일반 배송', '', CV) + '<div class="sd-dd"><div class="on">일반 배송' + CK + '</div><div>빠른 배송</div><div>방문 수령</div></div>'],
 ['multi', '멀티 셀렉트', 'Multi Select', '펼친 목록에서 여러 항목을 체크해 고르는 칸', '관심 분야처럼 여러 개를 고르는데 자리가 좁을 때', '관심 분야를 멀티 셀렉트로 만들어 줘. 목록 안에 체크박스가 있게.',
  fld('관심 분야를 선택해 주세요', 'mute', CV) + '<div class="sd-dd"><label class="sd-o"><input type="checkbox" checked> 디자인</label><label class="sd-o"><input type="checkbox"> 개발</label><label class="sd-o"><input type="checkbox"> 마케팅</label></div>'],
 ['date', '데이트 피커', 'Date Picker', '달력에서 날짜나 기간을 고름', '예약일, 출발·도착일처럼 날짜를 정확히 고를 때', '방문 날짜를 고르는 데이트 피커를 만들어 줘. 시작일과 끝날을 고르면 그 사이를 연한 파랑으로 이어 줘.',
  '<div class="sd-cal"><b>2026년 11월</b><div class="sd-wk">' + ['일','월','화','수','목','금','토'].map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div><div class="sd-wk">' + [8,9,10,11,12,13,14].map(function (x) { return '<span class="' + (x === 10 || x === 13 ? 'on' : x > 10 && x < 13 ? 'in' : '') + '">' + x + '</span>'; }).join('') + '</div></div>'],
 ['time', '타임 피커', 'Time Picker', '오전·오후, 시, 분을 굴려서 시간을 고름', '방문 시간, 알람처럼 시각을 고를 때', '방문 시간을 고르는 타임 피커를 휠 모양으로 만들어 줘. 가운데 줄이 고른 값.',
  '<div class="sd-wh"><div><span>오전</span><b>오후</b><span>오전</span></div><div><span>02</span><b>03</b><span>04</span></div><div><span>00</span><b>30</b><span>00</span></div></div>'],
 ['color', '컬러 피커', 'Color Picker', '색 견본을 눌러 원하는 색을 고름', '테마 색, 라벨 색처럼 색을 고를 때', '프로필 포인트 컬러를 동그라미 5개 중에서 고르게 하고, 고른 색에 체크 링을 둘러 줘.',
  '<div class="sd-li"><b>포인트 컬러</b><span class="sd-m">분홍색</span></div><div class="sd-sw" data-sd="one">' + ['#3182f6', '#8b5cf6', '#e5607a', '#eab04d', '#4caf88'].map(function (c, i) { return '<button class="' + (i === 2 ? 'on' : '') + '" style="background:' + c + '"></button>'; }).join('') + '</div>']
],
's-state': [
 ['default', '디폴트', 'Default', '아무 동작도 하지 않은 기본 상태', '처음 화면에 그려지는 모습. 안내 글(플레이스홀더)이 흐리게 보임', '이름 입력 칸의 디폴트 상태는 회색 테두리에 플레이스홀더 "이름을 입력해 주세요"로 해 줘.',
  '<div class="sd-m">이름</div>' + fld('이름을 입력해 주세요', 'mute') + '<div class="sd-h">프로필에 표시되는 이름이에요</div>'],
 ['pressed', '눌림', 'Pressed · Active', '누르고 있는 그 순간의 상태', '눌렀다는 느낌을 주려고 배경을 살짝 어둡게', '버튼과 입력 칸에 눌림 상태를 넣어 줘. 누르는 동안 배경이 살짝 어두워지게.',
  '<div class="sd-m">이름</div>' + fld('홍길동', 'pr') + '<div class="sd-h">프로필에 표시되는 이름이에요</div>'],
 ['focused', '포커스', 'Focused', '칸을 골라서 지금 입력할 수 있는 상태', '어디에 입력 중인지 알 수 있게 테두리를 강조', '입력 칸에 포커스가 가면 파란 테두리와 커서가 보이게 해 줘.',
  '<div class="sd-m">이름</div>' + fld('홍길동<i class="sd-caret"></i>', 'on') + '<div class="sd-h">프로필에 표시되는 이름이에요</div>'],
 ['disabled', '비활성', 'Disabled', '입력하거나 고칠 수 없는 상태', '조건이 안 맞아 아직 못 쓰는 칸·버튼. 흐리게 보임', '조건을 다 채우기 전까지 저장 버튼을 비활성 상태로 흐리게 보여 줘.',
  '<div class="sd-m">이름</div>' + fld('홍길동', 'dis') + '<button class="sd-btn dis">저장하기</button>'],
 ['error', '오류', 'Error', '입력한 값이 조건에 맞지 않는 상태', '틀린 이유를 빨간 글씨로 바로 아래에 알려 줌', '이름이 두 글자 미만이면 입력 칸을 오류 상태로 바꾸고 빨간 안내 문구를 보여 줘.',
  '<div class="sd-m">이름</div>' + fld('홍', 'err') + '<div class="sd-h red">이름은 두 글자 이상 입력해 주세요</div>'],
 ['success', '입력 완료', 'Success · Valid', '입력한 값이 조건에 맞는 상태', '맞게 썼다는 걸 초록 테두리와 체크로 알려 줌', '이름이 조건에 맞으면 입력 칸을 성공 상태로 바꾸고 초록 체크와 안내 문구를 보여 줘.',
  '<div class="sd-m">이름</div>' + fld('홍길동', 'ok', CK) + '<div class="sd-h grn">사용할 수 있는 이름이에요</div>']
],
's-fb': [
 ['modal', '모달', 'Modal · Dialog', '화면 위에 떠서 확인이나 선택을 받는 창. 뒤는 어둡게 막힘', '삭제, 취소처럼 꼭 확인받아야 하는 일', '예약 취소 버튼을 누르면 모달로 "예약을 취소할까요?"를 묻고, 취소 · 닫기 버튼을 보여 줘.',
  '<div class="sd-dim"><div class="sd-pop"><b>예약을 취소할까요?</b><small>취소하면 다시 예약해야 해요</small><div class="sd-2b"><button class="sd-btn g">닫기</button><button class="sd-btn">예약 취소</button></div></div></div>'],
 ['bottomsheet', '바텀 시트', 'Bottom Sheet', '화면 아래에서 올라오는 판. 위에 손잡이 막대가 있음', '모바일에서 옵션 고르기, 짧은 확인', '모바일에서 옵션을 누르면 바텀 시트가 아래에서 올라오게 해 줘. 위쪽에 손잡이 막대를 달아 줘.',
  '<div class="sd-dim bt"><div class="sd-sheet"><i></i><b>정렬</b><div>최신순</div><div>인기순</div></div></div>'],
 ['drawer', '드로워', 'Drawer', '화면 옆에서 미끄러져 나오는 패널', '필터, 전체 메뉴처럼 잠깐 열었다 닫는 내용', '필터 버튼을 누르면 오른쪽에서 드로워가 열리고, 배송 옵션 체크와 적용하기 버튼을 넣어 줘.',
  '<div class="sd-drw"><div class="l">상품 둘러보기</div><div class="r"><b>필터 <span>×</span></b><label class="sd-o"><input type="checkbox"> 무료 배송</label><label class="sd-o"><input type="checkbox"> 당일 배송</label><button class="sd-btn">적용하기</button></div></div>'],
 ['toast', '토스트', 'Toast', '짧은 안내가 잠깐 떴다가 저절로 사라짐', '저장했어요, 복사했어요처럼 결과만 알릴 때', '저장하면 화면 아래에 "저장했어요" 토스트를 2초 띄웠다가 사라지게 해 줘.',
  '<div class="sd-card">나를 위한 아이디어<small>지금 마음에 드는 항목을 저장해 보세요</small></div><div class="sd-toast">저장했어요</div>'],
 ['snackbar', '스낵바', 'Snackbar', '토스트처럼 아래에 뜨지만 버튼이 함께 있어 바로 실행 가능', '삭제 뒤 "실행 취소"처럼 되돌릴 기회를 줄 때', '삭제하면 아래에 "콘텐츠를 삭제했어요" 스낵바와 실행 취소 버튼을 보여 줘.',
  '<div class="sd-card">오늘의 영감<small>방금 저장한 콘텐츠</small></div><div class="sd-toast sb">콘텐츠를 삭제했어요<b>실행 취소</b></div>'],
 ['tooltip', '툴팁', 'Tooltip', '요소에 대고 있으면 뜨는 짧은 도움말 말풍선', '아이콘 뜻, 용어 설명처럼 한 줄 보충', '프로필 공개 옆 ? 아이콘에 툴팁으로 "언제든 설정에서 변경할 수 있어요"를 띄워 줘.',
  '<div class="sd-tip">언제든 설정에서 변경할 수 있어요</div><div class="sd-li">프로필 공개 <span class="sd-q">?</span><button class="sd-tg on" data-sd="tg"></button></div>'],
 ['popover', '팝오버', 'Popover', '누른 요소 옆에 붙어 열리는 작은 창. 메뉴나 추가 정보', '⋯ 더보기 메뉴처럼 그 항목에만 해당하는 동작', '파일 목록의 ⋯ 를 누르면 팝오버로 이름 변경 · 복사하기 · 삭제를 보여 줘.',
  '<div class="sd-card">프로젝트 기획서<span class="sd-dots">⋯</span></div><div class="sd-pov"><div>이름 변경</div><div>복사하기</div><div class="red">삭제</div></div>'],
 ['skeleton', '스켈레톤', 'Skeleton', '내용을 불러오는 동안 자리만 회색 모양으로 보여 줌', '목록, 카드가 늦게 뜰 때 화면이 비어 보이지 않게', '추천 목록을 불러오는 동안 카드 모양 스켈레톤을 보여 줘.',
  '<div class="sd-sk"><i></i><span><em></em><em class="s"></em></span></div><div class="sd-sk"><i></i><span><em></em><em class="s"></em></span></div>'],
 ['spinner', '스피너', 'Spinner · Loader', '빙글빙글 돌며 작업 중임을 알림', '얼마나 걸릴지 모르는 짧은 기다림', '버튼을 누르면 결과가 올 때까지 스피너를 돌려 줘.',
  '<div class="sd-ctr"><i class="sd-spin"></i><span class="sd-m">불러오는 중</span></div>'],
 ['progress', '프로그레스 바', 'Progress Bar', '진행된 만큼 막대가 채워져 정도를 보여 줌', '업로드, 목표 달성률처럼 얼마나 됐는지 알 때', '저축 목표를 프로그레스 바로 보여 주고 오른쪽에 퍼센트를 적어 줘.',
  '<div class="sd-m">이번 달 저축 목표</div><div class="sd-li"><b class="sd-big">53만원</b><b class="sd-bl">53%</b></div><div class="sd-bar"><i style="width:53%"></i></div><div class="sd-h">100만원까지 47만원 남았어요</div>'],
 ['badge', '뱃지', 'Badge', '상태나 새 소식을 알리는 작은 표시', 'NEW 표시, 안 읽은 개수 숫자', '알림 목록에 새 항목은 NEW 뱃지, 댓글은 빨간 숫자 뱃지를 달아 줘.',
  '<div class="sd-card">새로운 소식<span class="sd-bdg">NEW</span></div><div class="sd-card">댓글<span class="sd-bdg n">3</span></div>'],
 ['indicator', '인디케이터', 'Page Indicator', '지금 몇 번째를 보고 있는지 점으로 표시', '넘겨 보는 배너, 이미지 슬라이드 아래', '배너 슬라이드 아래에 점 인디케이터를 넣어 줘. 지금 장은 파란 점.',
  '<div class="sd-card grn">새로운 발견<small>오늘의 인기 콘텐츠를 살펴보세요</small></div><div class="sd-dotr"><i></i><i></i><i class="on"></i><i></i></div>'],
 ['divider', '디바이더', 'Divider', '콘텐츠 영역을 나누는 선이나 두꺼운 띠', '성격이 다른 묶음 사이', '내 자산과 이번 주 추천 사이에 두꺼운 회색 디바이더를 넣어 줘.',
  '<div class="sd-card bl">나의 자산<b>2,480,000원</b></div><hr class="sd-hr"><div class="sd-card">이번 주 추천<small>나에게 맞는 혜택을 확인해요</small></div>'],
 ['accordion', '아코디언', 'Accordion', '제목을 누르면 내용이 펼쳐지고 다시 누르면 접힘', '자주 묻는 질문처럼 필요한 것만 열어 볼 때', '자주 묻는 질문을 아코디언으로 만들어 줘. 한 번에 하나만 펼쳐지게.',
  '<details class="sd-acc" open><summary>배송은 얼마나 걸리나요?' + CV + '</summary><div>결제 후 보통 2~3일 걸려요.</div></details><details class="sd-acc"><summary>주문을 취소할 수 있나요?' + CV + '</summary><div>배송 전까지 취소할 수 있어요.</div></details>'],
 ['avatar', '아바타 그룹', 'Avatar Group', '사람 얼굴이나 이니셜 동그라미를 겹쳐 놓고 +숫자로 나머지를 표시', '참여자, 멤버 수를 짧게 보여 줄 때', '모임 카드에 멤버 아바타 3개를 겹쳐 놓고 나머지는 +211 로 보여 줘.',
  '<div class="sd-li"><span class="sd-av"><i style="background:#8b5cf6">M</i><i style="background:#3182f6">J</i><i style="background:#22a06b">T</i><em>+211</em></span><span class="sd-pill">듣는 중</span></div>']
],
's-lay': [
 ['hero', '히어로 섹션', 'Hero Section', '첫 화면 맨 위에서 핵심 메시지와 주요 버튼을 크게 보여 주는 영역', '랜딩 페이지, 소개 페이지 첫인상', '웹사이트 상단에 히어로 섹션을 만들어 줘. 배경 이미지를 화면 너비에 맞게 채우고, 그 위에 제목과 시작하기 버튼을 놓아 줘.',
  win('<div class="sd-hero"><b>당신의 하루를<br>더 가볍게</b><small>새로운 경험을 시작해요</small><button class="sd-btn sm">시작하기</button></div>')],
 ['mega', '메가 메뉴', 'Mega Menu', '메뉴에 올리면 많은 하위 메뉴가 큰 판으로 한 번에 펼쳐짐', '하위 메뉴가 많은 쇼핑몰, 회사 사이트', '상단 메뉴 "서비스"에 마우스를 올리면 메가 메뉴로 하위 항목을 두 줄로 펼쳐 줘.',
  win('<div class="sd-mega"><div><b>시작하기</b><span>서비스 소개</span><span>요금 안내</span></div><div><b>둘러보기</b><span>인기 콘텐츠</span><span>새로운 소식</span></div></div>')],
 ['sidebar', '사이드바', 'Sidebar', '화면 옆에 붙은 메뉴로 원하는 항목으로 이동', '메뉴가 많은 관리 화면, 웹앱 (이 비서실 왼쪽 메뉴)', '왼쪽에 사이드바 메뉴를 두고, 고른 메뉴는 파란 배경으로 표시해 줘.',
  win('<div class="sd-sbl"><div class="l"><span>대시보드</span><span class="on">내 활동</span><span>설정</span></div><div class="r"><b>내 활동</b><small>이번 달 활동</small><b class="sd-bl">48회</b></div></div>')],
 ['sticky', '스티키 헤더', 'Sticky Header', '스크롤해도 맨 위 메뉴가 붙어 있음', '긴 페이지에서 언제든 메뉴로 가야 할 때', '상단 메뉴를 스티키 헤더로 만들어서 스크롤해도 화면 위에 고정해 줘.',
  '<div class="sd-win sd-stk"><div class="sd-nav"><b>HOME</b><span>서비스</span><span>소개</span><span>문의</span></div><div class="sd-scr"><div class="sd-card">지금 인기 있는 콘텐츠</div><div class="sd-card">오늘의 새로운 발견</div><div class="sd-card grn">함께하는 순간</div><div class="sd-card">지금 인기 있는 콘텐츠</div></div></div>'],
 ['anchor', '앵커 링크', 'Anchor Link', '같은 페이지 안의 원하는 위치로 바로 이동하는 링크', '긴 상세 페이지의 특징 · 후기 · 문의로 건너뛰기', '상세 페이지 위에 특징 · 후기 · 문의 앵커 링크를 두고 누르면 그 섹션으로 부드럽게 스크롤해 줘.',
  win('<div class="sd-seg"><button>특징</button><button class="on">후기</button><button>문의</button></div><b>이용 후기</b><small class="sd-m">직접 경험한 이야기를 확인해 보세요</small>')],
 ['snap', '스크롤 스냅', 'Scroll Snap', '스크롤을 멈추면 가장 가까운 칸에 딱 맞춰 정렬됨', '카드 넘겨 보기, 한 화면씩 넘기는 소개 (옆으로 밀어 보세요)', '카드 목록을 가로 스크롤 스냅으로 만들어서 손을 떼면 카드가 가운데에 딱 맞게 해 줘.',
  '<div class="sd-snap"><div>01<b>취향에 맞는 선택</b></div><div>02<b>매일을 채우는 작은 기쁨</b></div><div>03<b>함께하는 순간</b></div></div>'],
 ['tabbar', '바텀 탭 바', 'Bottom Tab Bar', '모바일 화면 맨 아래에 고정된 주요 메뉴 3~5개', '앱의 큰 메뉴를 엄지로 바로 오갈 때', '모바일 맨 아래에 홈 · 기록 · 리포트 바텀 탭 바를 두고 지금 화면은 파랗게 표시해 줘.',
  phone('<div class="sd-card">3 / 6 복용<small>다음: 철분 65mg</small></div><div class="sd-tbar"><span class="on">오늘</span><span>약</span><span>리포트</span></div>')],
 ['breadcrumb', '브레드크럼', 'Breadcrumb', '지금 위치까지 지나온 경로를 > 로 이어서 보여 줌', '메뉴가 여러 단계일 때 어디쯤인지 알려 줌 (이 비서실 제목 위)', '페이지 제목 위에 공부 > 화면 구조 브레드크럼을 넣어 줘.',
  '<div class="sd-m">공부 › 화면 구조</div><b class="sd-big">브레드크럼</b>']
],
's-mo': [
 ['fadein', '페이드 인', 'Fade In', '투명한 상태에서 서서히 나타남', '화면이 열릴 때 내용이 부드럽게 보이게', '카드가 처음 나타날 때 0.3초 페이드 인으로 서서히 보이게 해 줘.',
  '<div class="sd-card bl a-fade">나를 위한 시간<small>작은 여유를 만나보세요</small></div>'],
 ['slidein', '슬라이드 인', 'Slide In', '한쪽 방향에서 미끄러지듯 들어옴', '새 알림, 옆에서 나오는 패널', '새 소식 카드가 왼쪽에서 슬라이드 인으로 들어오게 해 줘.',
  '<div class="sd-card bl a-slide">새로운 기능이 도착했어요<small>지금 바로 확인해 보세요</small></div>'],
 ['scalein', '스케일 인', 'Scale In', '작은 크기에서 커지며 나타남', '팝업, 모달이 열릴 때', '모달이 열릴 때 90%에서 100%로 스케일 인 하게 해 줘.',
  '<div class="sd-card bl a-scale">나의 아이디어<small>저장한 콘텐츠 12개</small></div>'],
 ['stagger', '스태거', 'Stagger', '여러 항목이 조금씩 시차를 두고 순서대로 나타남', '목록이 한꺼번에 뜨지 않고 차례로 보이게', '추천 목록 카드가 0.08초 간격으로 스태거 되며 차례로 나타나게 해 줘.',
  '<div class="sd-card a-stg" style="--i:0">새로운 디자인</div><div class="sd-card a-stg" style="--i:1">이달의 트렌드</div><div class="sd-card a-stg" style="--i:2">나를 위한 추천</div>'],
 ['ripple', '리플', 'Ripple', '누른 자리에서 물결처럼 동그랗게 퍼짐', '버튼을 눌렀다는 손맛', '송금하기 버튼을 누르면 누른 지점에서 리플 효과가 퍼지게 해 줘.',
  '<button class="sd-btn a-rip">송금하기<i></i></button>'],
 ['shimmer', '시머', 'Shimmer', '빛이 지나가듯 반짝이는 효과', '스켈레톤 위에 얹어서 불러오는 중임을 알림', '스켈레톤에 왼쪽에서 오른쪽으로 빛이 지나가는 시머 효과를 넣어 줘.',
  '<div class="sd-sk a-shim"><i></i><span><em></em><em class="s"></em></span></div><div class="sd-sk a-shim"><i></i><span><em></em><em class="s"></em></span></div>'],
 ['marquee', '마키', 'Marquee', '콘텐츠가 한 방향으로 끊임없이 흘러감', '협력사 로고, 공지 띠', '협력 브랜드 로고를 오른쪽에서 왼쪽으로 계속 흐르는 마키로 만들어 줘.',
  '<div class="sd-mq"><div>' + ['LUNE', 'NOVA', 'MODO', 'LUNE', 'NOVA', 'MODO'].map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div></div>'],
 ['shake', '셰이크', 'Shake', '요소가 좌우로 짧게 흔들림', '비밀번호 틀림처럼 "아니에요"를 몸짓으로', '비밀번호가 틀리면 입력 칸이 좌우로 셰이크 하고 빨간 문구를 보여 줘.',
  '<div class="sd-m">비밀번호</div>' + fld('••••••••', 'err a-shake') + '<div class="sd-h red">비밀번호를 다시 확인해 주세요</div>'],
 ['flip', '플립', 'Flip', '카드가 돌면서 앞뒤가 바뀜', '멤버십 카드, 단어 카드 앞뒤', '멤버십 카드를 누르면 Y축으로 플립 해서 뒷면 혜택을 보여 줘.',
  '<div class="sd-flip"><div class="a-flip"><div class="f">HYONA CLUB<b>나의 멤버십</b></div><div class="b">혜택 3개<b>무료 배송</b></div></div></div>'],
 ['ticker', '넘버 티커', 'Number Ticker', '숫자가 빠르게 바뀌며 목표값까지 올라감', '방문자 수, 총액처럼 숫자를 인상 깊게', '이번 달 방문자 수가 0부터 넘버 티커로 올라가서 1,349 에서 멈추게 해 줘.',
  '<div class="sd-card bl">이번 달 방문자<b class="sd-tk"><span class="a-tick"><i>0</i><i>3</i><i>7</i><i>9</i><i>1</i></span>,<span class="a-tick d2"><i>0</i><i>5</i><i>8</i><i>2</i><i>3</i></span><span class="a-tick d3"><i>0</i><i>9</i><i>1</i><i>6</i><i>4</i></span><span class="a-tick d4"><i>0</i><i>2</i><i>5</i><i>7</i><i>9</i></span></b><small class="sd-bl">지난달보다 +18%</small></div>'],
 ['mask', '마스크 리빌', 'Mask Reveal', '가려진 콘텐츠가 모양 틀을 따라 점점 드러남', '대표 사진, 제목을 극적으로 보여 줄 때', '대표 이미지가 아래에서 위로 마스크 리빌 되며 드러나게 해 줘.',
  '<b>오늘의 발견</b><div class="sd-img a-mask"></div>'],
 ['morph', '모핑', 'Morphing', '요소가 다른 모양으로 자연스럽게 변함', '검색 아이콘이 검색창으로, 버튼이 진행 표시로', '검색 아이콘을 누르면 동그라미가 가로로 늘어나며 검색창으로 모핑 되게 해 줘.',
  '<div class="sd-ctr"><div class="sd-morph a-morph"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/></svg><span>검색어를 입력해 주세요</span></div></div>'],
 ['rubber', '러버 밴딩', 'Rubber Banding', '끝에서 더 당기면 늘어났다가 놓으면 고무줄처럼 되돌아옴', '목록 맨 위·맨 아래에서 끝났다는 느낌', '목록 끝에서 더 당기면 러버 밴딩으로 살짝 늘어났다 되돌아오게 해 줘.',
  '<div class="sd-clip"><div class="a-rub"><div class="sd-card">새로운 소식<small>새 콘텐츠가 도착했어요</small></div><div class="sd-card">나를 위한 추천<small>오늘의 추천을 확인해 보세요</small></div></div></div>'],
 ['magnet', '마그네틱 효과', 'Magnetic Effect', '커서가 가까이 오면 요소가 그쪽으로 살짝 끌려감', '눈에 띄어야 하는 큰 버튼 (PC)', '"무료로 시작하기" 버튼에 마그네틱 효과를 넣어서 커서 쪽으로 살짝 따라오게 해 줘.',
  '<div class="sd-ctr"><button class="sd-btn a-mag">무료로 시작하기</button></div>'],
 ['parallax', '패럴랙스', 'Parallax', '배경과 콘텐츠가 서로 다른 속도로 움직여 깊이감이 생김', '여행, 브랜드 소개처럼 분위기 있는 긴 페이지', '배경 산 그림은 느리게, 앞의 카드는 빠르게 움직이는 패럴랙스 스크롤을 만들어 줘.',
  '<div class="sd-plx"><i class="a-plx1"></i><i class="a-plx2"></i><div class="sd-card a-plx3">나만의 여행<small class="sd-bl">자세히 보기 →</small></div></div>']
],
's-chart': [
 ['bar', '막대 차트', 'Bar Chart', '항목별 크기를 막대 길이로 비교', '월별 매출, 항목별 수량 비교', '월별 매출을 세로 막대 차트로 그리고 막대 위에 값을 적어 줘.', partChart('')],
 ['line', '꺾은선 차트', 'Line Chart', '시간에 따른 변화를 점을 이은 선으로 보여 줌', '추이, 증가·감소 흐름', '최근 6개월 방문자 수를 꺾은선 차트로 그려 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><g stroke="#e5e8eb"><line x1="10" x2="210" y1="30" y2="30"/><line x1="10" x2="210" y1="60" y2="60"/><line x1="10" x2="210" y1="90" y2="90"/></g><polyline points="20,80 55,65 90,72 125,45 160,50 195,25" fill="none" stroke="' + B + '" stroke-width="3" stroke-linejoin="round"/>' + [[20,80],[55,65],[90,72],[125,45],[160,50],[195,25]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.5" fill="#fff" stroke="' + B + '" stroke-width="2"/>'; }).join('') + '</svg>'],
 ['area', '영역 차트', 'Area Chart', '꺾은선 아래를 색으로 채워 양의 크기를 강조', '누적 사용량, 전력 사용처럼 양이 중요할 때', '하루 전력 사용량을 영역 차트로 그리고 아래를 연한 주황으로 채워 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><path d="M10 95 L10 80 C40 82 60 70 80 72 S120 50 140 55 S180 30 210 28 L210 95z" fill="#ffe3cc"/><path d="M10 80 C40 82 60 70 80 72 S120 50 140 55 S180 30 210 28" fill="none" stroke="#f08c3a" stroke-width="3"/></svg>'],
 ['pie', '파이 차트', 'Pie Chart', '전체를 100%로 놓고 조각 크기로 비율을 보여 줌', '구성비. 조각은 5개 이하일 때 읽기 좋음', '유입 채널 비율을 파이 차트로 그리고 조각마다 퍼센트를 적어 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><g transform="translate(110 60)"><circle r="46" fill="#e5e8eb"/><path d="M0 0 L0 -46 A46 46 0 0 1 14.2 43.7z" fill="#6c5ce7"/><path d="M0 0 L14.2 43.7 A46 46 0 0 1 -43.7 14.2z" fill="#4caf88"/><path d="M0 0 L-43.7 14.2 A46 46 0 0 1 -27 -37.2z" fill="#eab04d"/></g></svg>'],
 ['donut', '도넛 차트', 'Donut Chart', '가운데가 빈 파이 차트. 전체에서 각 항목이 차지하는 비율', '가운데에 합계 숫자를 크게 넣고 싶을 때', '유입 채널을 도넛 차트로 그리고 가운데에 전체 방문 24,500을 크게 적어 줘. 오른쪽에 범례와 퍼센트.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><g transform="translate(70 60) rotate(-90)" fill="none" stroke-width="14"><circle r="40" stroke="#e5e8eb"/><circle r="40" stroke="#6c5ce7" stroke-dasharray="113 252"/><circle r="40" stroke="#4caf88" stroke-dasharray="70 252" stroke-dashoffset="-113"/><circle r="40" stroke="#eab04d" stroke-dasharray="43 252" stroke-dashoffset="-183"/></g><text x="70" y="57" text-anchor="middle" font-size="8" fill="#8b95a1">전체 방문</text><text x="70" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="#191f28">24,500</text><g font-size="8" fill="#4e5968"><circle cx="135" cy="36" r="3" fill="#6c5ce7"/><text x="142" y="39">직접 방문 45%</text><circle cx="135" cy="54" r="3" fill="#4caf88"/><text x="142" y="57">검색 28%</text><circle cx="135" cy="72" r="3" fill="#eab04d"/><text x="142" y="75">소셜 17%</text><circle cx="135" cy="90" r="3" fill="#d1d6db"/><text x="142" y="93">기타 10%</text></g></svg>'],
 ['combo', '조합 차트', 'Combo Chart', '막대와 꺾은선처럼 서로 다른 그래프를 겹쳐 두 지표를 비교', '매출(막대)과 전환율(선)처럼 단위가 다른 두 값', '최근 5개월 매출은 막대, 전환율은 꺾은선으로 겹친 조합 차트를 그려 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><g fill="#8fd1b8">' + [[20,60],[60,45],[100,50],[140,30],[180,30]].map(function (p) { return '<rect x="' + p[0] + '" y="' + p[1] + '" width="24" height="' + (100 - p[1]) + '" rx="3"/>'; }).join('') + '</g><polyline points="32,58 72,48 112,54 152,38" fill="none" stroke="#6c5ce7" stroke-width="2.5"/>' + [[32,58],[72,48],[112,54],[152,38]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3" fill="#6c5ce7"/>'; }).join('') + '<g font-size="8" fill="#8b95a1"><text x="24" y="112">2월</text><text x="64" y="112">3월</text><text x="104" y="112">4월</text><text x="144" y="112">5월</text><text x="184" y="112">6월</text></g></svg>'],
 ['stack', '누적 막대 차트', 'Stacked Bar Chart', '막대 하나를 여러 색으로 쌓아 합계와 구성을 함께 보여 줌', '요일별 전기 사용량을 난방·조명·가전으로 나눠 볼 때', '요일별 에너지 사용량을 누적 막대 차트로 그리고 난방 · 조명 · 가전을 색으로 나눠 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120">' + [0,1,2,3,4,5,6].map(function (i) { var x = 18 + i * 28, a = [30,40,25,45,38,42,28][i], b = [15,18,22,12,16,14,20][i], c = [12,10,14,9,13,11,10][i], y = 100; return '<rect x="' + x + '" y="' + (y - c) + '" width="16" height="' + (c - 1) + '" rx="2" fill="#8b5cf6"/><rect x="' + x + '" y="' + (y - c - b) + '" width="16" height="' + (b - 1) + '" rx="2" fill="#3182f6"/><rect x="' + x + '" y="' + (y - c - b - a) + '" width="16" height="' + (a - 1) + '" rx="2" fill="#f08c3a"/>'; }).join('') + '</svg>'],
 ['scatter', '산점도', 'Scatter Plot', '두 지표의 관계를 점으로 찍어 보여 줌', '광고비가 늘면 매출도 느는지처럼 관계를 볼 때', '캠페인별 광고비(가로)와 매출(세로)을 산점도로 그려 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><g stroke="#8b95a1" stroke-width="1.2"><line x1="20" y1="10" x2="20" y2="100"/><line x1="20" y1="100" x2="210" y2="100"/></g>' + [[35,88,'#4caf88'],[50,82,'#6c5ce7'],[62,85,'#f08c3a'],[78,72,'#4caf88'],[92,78,'#6c5ce7'],[105,62,'#f08c3a'],[120,66,'#4caf88'],[135,50,'#6c5ce7'],[150,58,'#f08c3a'],[165,42,'#4caf88'],[178,48,'#6c5ce7'],[195,30,'#f08c3a']].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.5" fill="' + p[2] + '"/>'; }).join('') + '<text x="180" y="112" font-size="8" fill="#8b95a1">광고비 →</text><text x="24" y="16" font-size="8" fill="#8b95a1">매출</text></svg>'],
 ['bullet', '불릿 차트', 'Bullet Chart', '실적 막대를 목표선과 기준 구간 위에 겹쳐 비교', '목표 대비 얼마나 왔는지 좁은 자리에서', '이번 달 매출 목표 1억을 세로선으로, 실적 8,200만을 막대로 보여 주는 불릿 차트를 만들어 줘.',
  '<div class="sd-li"><b class="sd-big">₩82,000,000</b><span class="sd-pill pu">82% 달성</span></div><div class="sd-m">목표 ₩100,000,000</div><div class="sd-bul"><i class="r1"></i><i class="r2"></i><i class="v"></i><i class="t"></i></div><div class="sd-li sd-m"><span>0</span><span>목표 1억</span></div>'],
 ['gauge', '게이지', 'Gauge · Radial', '반원이나 원형 눈금 위에 지금 값을 바늘이나 호로 보여 줌', '온도, 달성률처럼 정해진 범위 안의 한 값', '실내 온도를 원형 게이지로 보여 주고 가운데에 21.5° 를 크게 적어 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><g transform="translate(110 70)" fill="none" stroke-width="12" stroke-linecap="round"><path d="M-50 0 A50 50 0 0 1 50 0" stroke="#f2f4f6"/><path d="M-50 0 A50 50 0 0 1 35.4 -35.4" stroke="#f08c3a"/></g><text x="110" y="70" text-anchor="middle" font-size="22" font-weight="800" fill="#191f28">21.5°</text><text x="110" y="86" text-anchor="middle" font-size="8" fill="#8b95a1">지금 19.8°</text></svg>'],
 ['heatmap', '히트맵', 'Heatmap', '칸을 색 진하기나 색깔로 칠해 값이나 상태를 보여 줌', '요일 × 시간대 복약 기록, 잔디 심기 같은 출석표', '요일(가로) × 아침·점심·저녁·밤(세로) 히트맵으로 복약 기록을 보여 주고, 제때 · 늦음 · 놓침을 색으로 나눠 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120">' + (function () { var s = '', st = ['b','b','b','b','b','o','b','b','p','b','b','b','b','n','b','o','b','p','b','o','n','b','b','b','b','o','b','n']; for (var r = 0; r < 4; r++) for (var c = 0; c < 7; c++) { var v = st[r * 7 + c]; s += '<rect x="' + (40 + c * 24) + '" y="' + (12 + r * 24) + '" width="20" height="20" rx="5" fill="' + ({ b: '#3182f6', o: '#eab04d', p: '#fcd5da', n: '#f2f4f6' })[v] + '"/>'; } return s; })() + '<g font-size="7" fill="#8b95a1"><text x="4" y="25">아침</text><text x="4" y="49">점심</text><text x="4" y="73">저녁</text><text x="4" y="97">밤</text></g></svg>'],
 ['treemap', '트리맵', 'Treemap', '사각형 넓이로 항목별 비중을 보여 줌', '항목이 많아 파이 차트로는 복잡할 때', '카테고리별 매출 비중을 트리맵으로 그리고 칸마다 이름과 퍼센트를 적어 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><g font-size="8" font-weight="700" fill="#fff"><rect x="10" y="10" width="92" height="100" rx="4" fill="#6c5ce7"/><text x="16" y="24">패션 42%</text><rect x="106" y="10" width="104" height="50" rx="4" fill="#4caf88"/><text x="112" y="24">리빙 21%</text><rect x="106" y="64" width="56" height="46" rx="4" fill="#eab04d"/><text x="112" y="78">뷰티 14%</text><rect x="166" y="64" width="44" height="26" rx="4" fill="#a99cf0"/><text x="170" y="78">식품 13%</text><rect x="166" y="94" width="44" height="16" rx="4" fill="#d1d6db"/><text x="170" y="105" fill="#4e5968">기타 10%</text></g></svg>'],
 ['radar', '레이더 차트', 'Radar Chart', '여러 지표를 거미줄 모양 축에 찍어 수준을 한눈에 비교', '사용성 · 속도 · 디자인처럼 여러 항목 평가', '제품 만족도를 사용성 · 속도 · 안정성 · 기능 · 디자인 5축 레이더 차트로 그려 줘.',
  '<svg class="sd-chart" viewBox="0 0 220 120"><g transform="translate(110 62)"><polygon points="0,-48 45.6,-14.8 28.2,38.8 -28.2,38.8 -45.6,-14.8" fill="none" stroke="#e5e8eb"/><polygon points="0,-28 27,-9 17,23 -17,23 -27,-9" fill="none" stroke="#e5e8eb"/><polygon points="0,-36 34,-11 20,28 -15,20 -32,-10" fill="#4caf8833" stroke="#4caf88" stroke-width="2"/></g><g font-size="8" fill="#8b95a1"><text x="100" y="10">사용성</text><text x="160" y="50">속도</text><text x="140" y="110">안정성</text><text x="60" y="110">기능</text><text x="30" y="50">디자인</text></g></svg>'],
 ['spark', '스파크라인', 'Sparkline', '축이나 눈금 없이 작게 그린 추이 선', '숫자 옆에 흐름만 살짝 보여 줄 때', '총 사용량 숫자 옆에 최근 7일 스파크라인을 작게 넣어 줘.',
  '<div class="sd-li"><span><span class="sd-m">사용 중</span><br><b class="sd-big">1.83 kW</b></span><svg viewBox="0 0 80 30" width="96" height="36"><polyline points="2,24 12,20 22,22 32,14 42,17 52,9 62,12 78,4" fill="none" stroke="#f08c3a" stroke-width="2.5" stroke-linejoin="round"/></svg></div><div class="sd-h grn">평소보다 12% 적어요</div>'],
 ['axis', '축', 'Axis (X축 · Y축)', '값을 읽는 기준선. 가로가 X축, 세로가 Y축', '단위와 범위를 알려 줌', 'X축은 월, Y축은 매출(만원)로 하고 Y축은 0부터 시작해 줘.', partChart('axis')],
 ['grid', '눈금선', 'Gridline', '축 눈금에서 가로로 이어 그은 옅은 보조선', '막대 높이를 눈으로 맞춰 읽기 쉽게', '차트 뒤에 아주 옅은 회색 가로 눈금선만 넣어 줘.', partChart('grid')],
 ['legend', '범례', 'Legend', '색이나 모양이 무엇을 뜻하는지 알려 주는 표', '계열이 둘 이상일 때', '차트 오른쪽 위에 범례를 넣어서 색마다 이름을 적어 줘.', partChart('legend')],
 ['label', '데이터 레이블', 'Data Label', '막대나 점 옆에 값을 숫자로 직접 적은 것', '정확한 값이 중요할 때', '막대 위에 데이터 레이블로 값을 적어 줘.', partChart('label')],
 ['ctip', '차트 툴팁', 'Chart Tooltip', '막대나 점에 대면 자세한 값이 말풍선으로 뜸', '레이블을 다 적으면 복잡할 때', '막대에 마우스를 올리면 툴팁으로 월과 정확한 금액을 보여 줘.', partChart('tip')]
]
};

/* 데이터 정리 */
var ALL = [], BYK = {};
Object.keys(T).forEach(function (c) { T[c] = T[c].map(function (a) { var o = { k: a[0], n: a[1], en: a[2], d: a[3], use: a[4], ai: a[5], demo: a[6], c: c }; ALL.push(o); BYK[o.k] = o; return o; }); });

var LSK = 'hn:study:done';
function done() { try { return JSON.parse(localStorage.getItem(LSK) || '{}') || {}; } catch (e) { return {}; } }
function setDone(k, v) { var d = done(); if (v) d[k] = 1; else delete d[k]; try { localStorage.setItem(LSK, JSON.stringify(d)); } catch (e) {} }

var q = ''; // 검색어
function e(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
var CKB = '<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>';

function card(t, dn) {
  return '<article class="sd-c" id="t-' + t.k + '">' +
    '<div class="sd-hd"><div><h3>' + e(t.n) + '</h3><span class="en">' + e(t.en) + '</span></div>' +
    '<button class="sd-done' + (dn ? ' on' : '') + '" data-done="' + t.k + '" aria-pressed="' + !!dn + '"><i>' + CKB + '</i>외웠어요</button></div>' +
    '<p class="sd-d">' + e(t.d) + '</p>' +
    '<div class="sd-demo">' + t.demo + '</div>' +
    '<dl class="sd-dl"><dt>언제</dt><dd>' + e(t.use) + '</dd><dt>AI에게</dt><dd class="ai">“' + e(t.ai) + '”</dd></dl>' +
    '</article>';
}
function search() {
  return '<div class="sd-sr"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg><input id="sdQ" type="search" placeholder="용어 찾기 (한글 · 영문)" value="' + e(q) + '"></div>';
}
function prog(list, dn) {
  var n = list.filter(function (t) { return dn[t.k]; }).length;
  return '<div class="box sd-pg"><div class="bt">외운 용어<small>' + n + ' / ' + list.length + '</small></div><div class="meter"><i style="width:' + (list.length ? Math.round(n / list.length * 100) : 0) + '%"></i></div></div>';
}
function page(c) {
  var dn = done(), list = T[c];
  if (q) { var w = q.toLowerCase(); list = ALL.filter(function (t) { return (t.n + ' ' + t.en + ' ' + t.d).toLowerCase().indexOf(w) >= 0; }); }
  var h = search() + (q ? '<div class="sd-cnt">\'' + e(q) + '\' 찾은 용어 ' + list.length + '개 · 모든 분류에서 찾았어요</div>' : prog(list, dn));
  if (!list.length) return h + '<div class="box empty">찾는 용어가 없어요.</div>';
  return h + '<div class="sd-grid">' + list.map(function (t) { return card(t, dn[t.k]); }).join('') + '</div>';
}

/* 퀴즈 */
var QZ = { cur: null, opts: [], pick: null, ok: 0, n: 0, skip: false };
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
function qNext() {
  var dn = done(), pool = QZ.skip ? ALL.filter(function (t) { return !dn[t.k]; }) : ALL;
  if (!pool.length) pool = ALL;
  var t = pool[Math.floor(Math.random() * pool.length)];
  if (QZ.cur && pool.length > 1 && t.k === QZ.cur.k) return qNext();
  var same = shuffle(ALL.filter(function (x) { return x.k !== t.k && x.c === t.c; })), other = shuffle(ALL.filter(function (x) { return x.k !== t.k && x.c !== t.c; }));
  QZ.cur = t; QZ.pick = null; QZ.opts = shuffle([t].concat(same.concat(other).slice(0, 3)));
}
function quiz() {
  if (!QZ.cur) qNext();
  var t = QZ.cur, p = QZ.pick, dn = done();
  var h = '<div class="box sd-qz"><div class="bt">이 뜻의 용어는?<small>맞힌 개수 ' + QZ.ok + ' / ' + QZ.n + '</small></div>' +
    '<p class="sd-qd">' + e(t.d) + '</p><p class="sd-h">' + e(t.use) + '</p>' +
    '<div class="sd-qo">' + QZ.opts.map(function (o) {
      var cl = p ? (o.k === t.k ? ' ok' : o.k === p ? ' no' : '') : '';
      return '<button class="sd-qb' + cl + '" data-qa="' + o.k + '"' + (p ? ' disabled' : '') + '>' + e(o.n) + '<small>' + e(o.en) + '</small></button>';
    }).join('') + '</div>';
  if (p) h += '<div class="sd-qr ' + (p === t.k ? 'ok' : 'no') + '">' + (p === t.k ? '맞았어요' : '정답은 ' + e(t.n) + '예요') + '</div><div class="sd-demo">' + t.demo + '</div>' +
    '<div class="sd-qx"><button class="sd-done' + (dn[t.k] ? ' on' : '') + '" data-done="' + t.k + '"><i>' + CKB + '</i>외웠어요</button><button class="sd-nx" data-qn>다음 문제</button></div>';
  h += '</div><label class="sd-sk2"><input type="checkbox" data-qs' + (QZ.skip ? ' checked' : '') + '> 외운 용어는 빼고 내기</label>';
  return h;
}

/* 화면 안 동작 (작은 예시를 눌러 볼 수 있게) */
function bind(root, rerender) {
  var s = root.querySelector('#sdQ');
  if (s) s.oninput = function () { q = s.value.trim(); var pos = s.selectionStart; rerender(); var n = root.querySelector('#sdQ'); if (n) { n.focus(); try { n.setSelectionRange(pos, pos); } catch (er) {} } };
  root.onclick = function (ev) {
    var b = ev.target.closest('button,[data-qs]'); if (!b || !root.contains(b)) return;
    if (b.dataset.done) { var v = !b.classList.contains('on'); setDone(b.dataset.done, v); b.classList.toggle('on', v); b.setAttribute('aria-pressed', v); var pg = root.querySelector('.sd-pg'); if (pg) rerender(); return; }
    if (b.dataset.qa) { QZ.pick = b.dataset.qa; QZ.n++; if (QZ.pick === QZ.cur.k) QZ.ok++; rerender(); return; }
    if ('qn' in b.dataset) { qNext(); rerender(); return; }
    var w = b.parentElement, k = w && w.dataset.sd;
    if (b.dataset.sd === 'tg') { b.classList.toggle('on'); return; }
    if (k === 'tab' || k === 'seg' || k === 'one') { [].forEach.call(w.children, function (x) { x.classList.toggle('on', x === b); }); return; }
    if (k === 'many') { b.classList.toggle('on'); return; }
    if (k === 'x') { b.parentNode.removeChild(b); return; }
    if (k === 'st') { var n = w.querySelector('b'), c = Math.max(1, +n.textContent + (b.textContent === '+' ? 1 : -1)); n.textContent = c; var tot = w.closest('.sd-demo').querySelector('.sd-ink'); if (tot) tot.textContent = (c * 18000).toLocaleString('ko-KR') + '원'; }
  };
  root.onchange = function (ev) { if (ev.target.dataset && 'qs' in ev.target.dataset) { QZ.skip = ev.target.checked; qNext(); rerender(); } };
  [].forEach.call(root.querySelectorAll('[data-sd="rg"]'), function (r) { r.oninput = function () { var o = r.closest('.sd-demo').querySelector('[data-sdo]'); if (o) o.textContent = '₩' + r.value + 'K'; }; });
}

window.STUDY = { cats: CATS, page: page, quiz: quiz, bind: bind, all: ALL };
})();
