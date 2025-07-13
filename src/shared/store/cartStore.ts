// INFO
/**
 장바구니 목록을 불러올때마다 api를 호출하는 것이 아닌 전역으로 관리해서 불필요한 동작을 제거하고자 장바구니 store를 생성함.
 현재 product_id로 장바구니를 제어하고 있는데 api로는 장바구니 전용 _id로 관리가 되고 있어 헷갈릴 소지가 있어 추후 장바구니 코드를 짜면서 수정이 필요함.

 */


import { create } from "zustand";
import { persist } from "zustand/middleware";

// 장바구니 상품 타입 (임시, 추후 필요시 확장 가능)
interface cartItem {
  _id : number;
  product_id : number;
  quantity : number;
  price: number;
  image?: string;
}

// 장바구니 zustand 상태 정의
interface cartState {
  items : cartItem[];

  addItem: (item: cartItem) => void;
  removeItem: (product_id: number) => void;
  updateQuantity: (product_id: number, quantity: number) => void;
  clearCart: () => void;
}


export const useCartStore = create<cartState>()(
  persist(
    (set, get) => ({
      items: [],

      // 장바구니 추가
      addItem: (item : cartItem) => {
        const existing = get().items.find((i) => i.product_id === item.product_id);
        if (existing) {
          // 이미 있는 경우 수량만 증가
          set({
            items: get().items.map((i) =>
              i.product_id === item.product_id ? { ...i, quantity: i.quantity + item.quantity } : i)
          });
        } else {
          // 새 상품 추가
          set({ items: [...get().items, item] });
        }
      },

      // 장바구니에서 상품 제거
      removeItem: (product_id) =>
        set({
          items: get().items.filter((i) => i.product_id !== product_id),
        }),

      // 상품 수량 변경 
      updateQuantity: (product_id, quantity) =>
        set({
          items: get().items.map((i) =>
            i.product_id === product_id ? { ...i, quantity } : i
          ),
        }),

      // 장바구니 비우기 
      clearCart: () => set({ items: [] })
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);


/*
사용 예시

1. 장바구니에 상품 추가
const { addItem } = useCartStore();

addItem({
  _id: 101,
  product_id: 2001,
  quantity: 2,
  price: 15000,
  image: "/images/product1.jpg",
});


2. 장바구니에서 상품 제거
const { removeItem } = useCartStore();
removeItem(2001); // 해당 product_id 제거


3. 수량 업데이트
const { updateQuantity } = useCartStore();
updateQuantity(2001, 5); // product_id 2001의 수량을 5로 변경


4. 장바구니 비우기
const { clearCart } = useCartStore();
clearCart();


5. 장바구니 목록 가져오기
const items = useCartStore((state) => state.items);
console.log(items); // 배열 형태로 상품 목록 확인


*/