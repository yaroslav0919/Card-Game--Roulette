import create from "zustand"
import produce from "immer"

const useStore = create((set) => ({
	app: null,
	setApp: (payload: any) => set(produce((state: any) => {
		state.app = payload
	})),

	// dragInfo: {
	// },
	// setDragInfo: (payload: any) => set(produce((state: any) => {
	// 	state.dragInfo = payload
	// })),
}))

export default useStore
