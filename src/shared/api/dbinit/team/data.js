import dayjs from 'dayjs';

function getTime(day = 0, second = 0) {
  return dayjs().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (clientId, nextSeq) => {
  return {
    // 회원
    user: [
      //관리자 데이터
      {
        _id: await nextSeq('user'),
        email: 'admin@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '무지',
        phone: '01011112222',
        address: '서울시 강남구 역삼동 123',
        type: 'admin',
        loginType: 'email',
        image: `/files/${clientId}/user-muzi.png`,
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          birthday: '03-23',
        },
      },
      // 판매자 데이터
      {
        _id: await nextSeq('user'),
        email: 's1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '네오',
        phone: '01022223333',
        address: '서울시 강남구 삼성동 456',
        type: 'seller',
        loginType: 'email',
        image: `/files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
          businessName: '오구상회',
          representativeName: '김오구',
          businessNumber: '123-45-67890',
          tel: '02-123-4567',
          businessAddress: '부산시 해운대구 반송로 456',
          businessLicenseImage: '/files/201/business-license.jpg',
          telecomRegistrationImage: '/files/201/telecom-cert.jpg',

          // 인증 상태 정보
          certification: {
          status: 'approved', // 'pending' | 'rejected' | 'approved'
          requestedAt: '2025-07-01T09:30:00Z',
          reviewedAt: '2025-07-03T15:45:00Z',
          reviewer: 'admin@market.com',
          reason: '서류 이상 없음',
          }
        }
      },
      // 일반 유저 데이터
      {
        _id: await nextSeq('user'),
        email: 'u1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '제이지',
        phone: '01044445555',
        address: '서울시 강남구 논현동 222',
        type: 'user',
        loginType: 'email',
        image: `/files/${clientId}/user-jayg.webp`,
        createdAt: getTime(-20, -60 * 30),
        updatedAt: getTime(-10, -60 * 60 * 12),
        extra: {
          birthday: '11-30',
          membershipClass: 'MC02', // 예: 'MC01(씨앗)', 'MC02(새싹)', ...
          coupons: [
            { id: 'C001', name: '5% 할인 쿠폰', expiresAt: '2025-08-01' },
            { id: 'C002', name: '무료배송 쿠폰', expiresAt: '2025-09-15' }
          ],
          address: [
            { id: 1, name: '회사', value: '서울시 강동구 천호동 123' },
            { id: 2, name: '집', value: '서울시 강동구 성내동 234' }
          ]
        },
      },
    ],

    // 상품
    product: [
      // 일반 상품 데이터
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 22800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '딸기 5kg',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/sample-dog.jpg`,
            name: 'sample-dog.jpg',
            originalname: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>방금 재배한 국산 딸기</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          productType: 'basic',
          category: ['AG01', 'AG0101'],
          origin: '국산',         // 원산지
          productionPlace: '강원도 평창군', // 생산지
          composition: '감자 5kg / 특상',  // 상품 구성
          deliveryInfo: '택배 / 평일 1~2일 소요',
          detailInfo: '청정지역 평창에서 자란 특상 감자입니다.',
          likeCount: 124,
          isNew: true,
          isBest: false,
          sort: 3
        }
      },
      // 여행 상품 데이터
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 22800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '강원도 농촌 체험 2박 3일',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/sample-dog.jpg`,
            name: 'sample-dog.jpg',
            originalname: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>강원도 농촌 체험 2박 3일 체험하고 힐링하고 재밌어요</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          productType: 'travel',
          category: ['TR01', 'TR0101'],
          region: '강원도 원주',
          departureDate: '2025-08-01',
          returnDate: '2025-08-03',
          meetingPlace: '강남역 1번출구',
          maxPeople: 20,
          minPeople: 5,
          peopleCnt: 6,
          includedItems: ['왕복 버스', '숙박 2박', '감자캐시 체험', '조식'],
          notIncludedItems: ['중식', '석식'],
          schedule: [
            { day: 1, title: '강원도 도착 및 이장님 인사', details: '이장님의 연설 듣기 딸기 농장 방문하기' },
            { day: 2, title: '중문 관광', details: '유채꽃밭, 오설록 티뮤지엄 방문' }
          ],
          guideInfo: {
            name: '김여행',
            contact: '010-1234-5678'
          },
          travelAgency: {
            name: '트래블코리아',
            license: 'T-2024-1234'
          },
          isPopular: true
        }
      },
      // 텃밭 서비스 상품 데이터(임시)
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 22800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '김이장님 텃밭',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/sample-dog.jpg`,
            name: 'sample-dog.jpg',
            originalname: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>원주시 김이장님의 텃밭을 이용해보세요!!!!</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          productType: 'subscription',
          totalPlots: 8,
          farmName: '김농부의 텃밭',
          harvestExpectedDate: '2025-10-15',
          vegetables: ['방울토마토', '고추', '상추'],
          farmLocation: '전북 남원시 금동길 123',
          experienceInfo: '매주 작물 성장 사진 제공',
          
          plots: [
            {
              plotNumber: 1,
              name: 'A구역',
              isAvailable: false,
              ownerUserId: 1002,
              plantedAt: '2025-07-01',
              status: 'growing' // available | growing | harvested
            },
            {
              plotNumber: 2,
              name: 'B구역',
              isAvailable: true,
              ownerUserId: null,
              status: 'available'
            },
            {
              plotNumber: 3,
              name: 'C구역',
              isAvailable: true,
              ownerUserId: null,
              status: 'available'
            },
            {
              plotNumber: 4,
              name: 'D구역',
              isAvailable: true,
              ownerUserId: null,
              status: 'available'
            },
            {
              plotNumber: 5,
              name: 'F구역',
              isAvailable: true,
              ownerUserId: null,
              status: 'available'
            },
          ]
        }
      },
    ],

    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 4,
        state: 'OS020',
        products: [
          {
            _id: 2,
            seller_id: 2,
            state: 'OS020',
            name: '헬로카봇 스톰다이버',
            image: {
              path: `/files/${clientId}/sample-diver.jpg`,
              name: 'sample-diver.jpg',
              originalname: '헬로카봇.jpg',
            },
            quantity: 2,
            price: 34520,
            review_id: 3,
          },
        ],
        cost: {
          products: 34520,
          shippingFees: 2500,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 37020,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 4,
        state: 'OS010',
        products: [
          {
            _id: 3,
            seller_id: 2,
            state: 'OS010',
            name: '레고 클래식 라지 조립 박스 10698',
            image: {
              path: `/files/${clientId}/sample-classic.jpg`,
              name: 'sample-classic.jpg',
              originalname: '레고 클래식.jpg',
            },
            quantity: 1,
            price: 48870,
          },
          {
            _id: 4,
            seller_id: 3,
            state: 'OS010',
            name: '레고 테크닉 42151 부가티 볼리드',
            image: {
              path: `/files/${clientId}/sample-bugatti.png`,
              name: 'sample-bugatti.png',
              originalname: '부가티.png',
            },
            quantity: 2,
            price: 90000,
            review_id: 2,
          },
        ],
        cost: {
          products: 138840,
          shippingFees: 3500,
          discount: {
            products: 13880,
            shippingFees: 3500,
          },
          total: 124960,
        },
        address: {
          name: '집',
          value: '서울시 강남구 역삼동 123',
        },
        createdAt: getTime(-4, -60 * 60 * 22),
        updatedAt: getTime(-2, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('order'),
        user_id: 4,
        state: 'OS040',
        products: [
          {
            _id: 4,
            seller_id: 3,
            state: 'OS110',
            name: '레고 테크닉 42151 부가티 볼리드',
            image: {
              path: `/files/${clientId}/sample-bugatti.png`,
              name: 'sample-bugatti.png',
              originalname: '부가티.png',
            },
            quantity: 1,
            price: 45000,
            review_id: 1,
          },
        ],
        cost: {
          products: 45000,
          shippingFees: 3500,
          discount: {
            products: 4500,
            shippingFees: 0,
          },
          total: 44000,
        },
        address: {
          name: '학교',
          value: '서울시 강남구 역삼동 234',
        },
        payment: {
          success: true,
          imp_uid: 'imp_138601212227',
          pay_method: 'card',
          merchant_uid: 'mid_1702540599641',
          name: '레고 테크닉 42151 부가티 볼리드',
          paid_amount: 45000,
          currency: 'KRW',
          pg_provider: 'html5_inicis',
          pg_type: 'payment',
          pg_tid: 'StdpayCARDINIpayTest20231214165706277441',
          apply_num: '30123157',
          buyer_name: '제이지',
          buyer_email: 'aceppin@daum.net',
          buyer_tel: '01044445555',
          buyer_addr: '',
          buyer_postcode: '',
          custom_data: null,
          status: 'paid',
          paid_at: 1702540626,
          receipt_url: 'https://iniweb.inicis.com/DefaultWebApp/mall/cr/cm/mCmReceipt_head.jsp?noTid=StdpayCARDINIpayTest20231214165706277441&noMethod=1',
          card_name: '국민KB카드',
          bank_name: null,
          card_quota: 0,
          card_number: '457973*********5',
        },
        delivery: {
          company: '한진 택배',
          trackingNumber: '364495958003',
          url: 'https://trace.cjlogistics.com/next/tracking.html?wblNo=364495958003',
        },
        createdAt: getTime(-3, -60 * 60 * 18),
        updatedAt: getTime(-1, -60 * 60 * 1),
      },
      {
        _id: await nextSeq('order'),
        user_id: 2,
        state: 'OS040',
        products: [
          {
            _id: 2,
            seller_id: 2,
            state: 'OS310',
            name: '헬로카봇 스톰다이버',
            image: {
              path: `/files/${clientId}/sample-diver.jpg`,
              name: 'sample-diver.jpg',
              originalname: '헬로카봇.jpg',
            },
            quantity: 1,
            price: 17260,
            review_id: 2,
          },
        ],
        cost: {
          products: 17260,
          shippingFees: 2500,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 19760,
        },
        address: {
          name: '학교',
          value: '서울시 강남구 역삼동 234',
        },
        delivery: {
          company: '한진 택배',
          trackingNumber: '364495958003',
          url: 'https://trace.cjlogistics.com/next/tracking.html?wblNo=364495958003',
        },
        createdAt: getTime(-3, -60 * 60 * 18),
        updatedAt: getTime(-1, -60 * 60 * 1),
      },
    ],

    // 후기
    review: [
      {
        _id: await nextSeq('review'),
        user_id: 4,
        user: {
          _id: 4,
          name: '제이지',
          image: 'user-jayg.webp'
        },
        order_id: 101,
        product_id: 2,
        rating: 5,
        content: '감자가 진짜 크고 좋아요! 삶아서 먹으니 맛있네요.',
        createdAt: getTime(-4, -60 * 60 * 12),
        extra: {
          title: '크고 맛있어요!'
        }
      },
      {
        _id: await nextSeq('review'),
        user_id: 6,
        user: {
          _id: 6,
          name: '춘식이',
          image: 'user-chunsik.webp'
        },
        order_id: 102,
        product_id: 2,
        rating: 4,
        content: '조금 작은 감자도 있었지만 전체적으로 만족합니다.',
        createdAt: getTime(-3, -60 * 60 * 9),
        extra: {
          title: '전반적으로 만족'
        }
      },
      {
        _id: await nextSeq('review'),
        user_id: 7,
        user: {
          _id: 7,
          name: '라이언',
          image: 'user-ryan.webp'
        },
        order_id: 103,
        product_id: 2,
        rating: 5,
        content: '배송 빠르고 포장도 꼼꼼했어요. 부모님도 좋아하셨어요!',
        createdAt: getTime(-2, -60 * 60 * 7),
        extra: {
          title: '부모님 선물로 딱!'
        }
      },
      {
        _id: await nextSeq('review'),
        user_id: 8,
        user: {
          _id: 8,
          name: '콘',
          image: 'user-con.png'
        },
        order_id: 104,
        product_id: 2,
        rating: 3,
        content: '감자는 괜찮았는데 배송이 하루 늦었어요.',
        createdAt: getTime(-1, -60 * 60 * 5),
        extra: {
          title: '배송만 조금 아쉬워요'
        }
      },
      {
        _id: await nextSeq('review'),
        user_id: 9,
        user: {
          _id: 9,
          name: '튜브',
          image: 'user-tube.webp'
        },
        order_id: 105,
        product_id: 2,
        rating: 5,
        content: '강원도 감자답게 정말 고소하고 맛있네요! 재구매 의사 있습니다.',
        createdAt: getTime(0, -60 * 60 * 2),
        extra: {
          title: '강력 추천합니다!'
        }
      }
   ],

    // 장바구니
    cart: [

    ],

    // 즐겨찾기/북마크
    bookmark: [

    ],
    
    // QnA, 공지사항 나의 농작물 자랑하기 등의 게시판
    post: [
      {
        _id: await nextSeq('post'),
        type: 'qna',
        product_id: 1,
        seller_id: 2,
        views: 5,
        user: {
          _id: 4,
          name: '제이지',
          image: 'user-jayg.webp'
        },
        title: '크기가 얼마만한가요?',
        content: '아이가 6살인데 가지고 놀기 적당한 크기인가요?',
        replies: [
          {
            _id: await nextSeq('reply'),
            user: {
              _id: 2,
              name: '네오',
              image: 'user-neo.png'
            },
            content: '크기는 상품 상세정보에 나와 있습니다.',
            like: 5,
            createdAt: getTime(-2, -60 * 60 * 20),
            updatedAt: getTime(-2, -60 * 60 * 2),
          },
          {
            _id: await nextSeq('reply'),
            user: {
              _id: 4,
              name: '제이지',
              image: 'user-jayg.webp'
            },
            content: '어디있나 모르겠어요.',
            like: 7,
            createdAt: getTime(-2, -60 * 60 * 10),
            updatedAt: getTime(-2, -60 * 60 * 1),
          },
          {
            _id: await nextSeq('reply'),
            user: {
              _id: 2,
              name: '네오',
              image: 'user-neo.png'
            },
            content: '높이 60cm 입니다.',
            like: 3,
            createdAt: getTime(-2, -60 * 60 * 9),
            updatedAt: getTime(-1, -60 * 60 * 20),
          },
        ],
        createdAt: getTime(-3, -60 * 60 * 2),
        updatedAt: getTime(-3, -60 * 60 * 2),
      },

      {
        _id: await nextSeq('post'),
        type: 'notice',
        views: 10,
        user: {
          _id: 1,
          name: '무지',
          image: 'user-muzi.png'
        },
        title: '배송지연 안내',
        content: '크리스마스 물류 증가로 인해 평소보다 2~3일 지연될 예정입니다.',
        createdAt: getTime(-4, -60 * 60 * 2),
        updatedAt: getTime(-2, -60 * 60 * 13),
      },

      {
        _id: await nextSeq('post'),
        type: 'farm', // '내 농장물 자랑하기' 게시판
        product_id: 11, // (선택) 구독 상품과 연결 가능
        seller_id: 3,
        views: 0,
        user: {
          _id: 3,
          name: '김농부',
          image: 'user-farmer.png'
        },
        title: '우리 밭에서 상추가 자라요!',
        content: '비 온 다음날이라 그런지 훨씬 푸릇푸릇해졌어요 🌱',
        images: [
          '/files/3/farm-lettuce1.jpg',
          '/files/3/farm-lettuce2.jpg'
        ],
        createdAt: getTime(-1, -60 * 60 * 6),
        updatedAt: getTime(-1, -60 * 60 * 2),
        extra: {
          weather: '비 온 뒤 맑음',
          temperature: '22도',
          memo: '다음주엔 김장 채소 심기!'
        }
      },
      {
        _id: await nextSeq('post'),
        type: 'faq',
        views: 210,
        title: '배송은 얼마나 걸리나요?',
        content: '기본 배송은 평일 기준 1~3일 소요됩니다. 산간지역은 1~2일 추가될 수 있습니다.',
        createdAt: getTime(-10, -60 * 60 * 5),
        updatedAt: getTime(-8, -60 * 60 * 4),
        extra: {
          category: '배송', // 분류: 배송, 결제, 회원, 쿠폰 등
        }
      },
    ],

    // 코드
    code: [

    ],

    // 설정
    config: [

    ],
  };
};
