import create from "zustand";
import produce from "immer";

const useStore = create((set) => ({
  app: null,
  setApp: (payload) =>
    set(
      produce((state) => {
        state.app = payload;
      })
    ),

  timeLine: null,
  setTime: (payload) =>
    set(
      produce((state) => {
        state.timeLine = payload;
      })
    ),

  // dragInfo: {
  // },
  // setDragInfo: (payload: any) => set(produce((state: any) => {
  // 	state.dragInfo = payload
  // })),
}));

export default useStore;
