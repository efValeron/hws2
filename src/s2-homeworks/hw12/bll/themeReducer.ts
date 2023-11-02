const initState = {
  themeId: 1
}

type RootThemeStateType = typeof initState

export const themeReducer = (state: RootThemeStateType = initState, action: ActionType): RootThemeStateType => { // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      return {
        ...state,
        themeId: action.id
      }
    default:
      return state
  }
}

type ActionType = ReturnType<typeof changeThemeIdAC>

export const changeThemeIdAC = (id: number) => ({type: "SET_THEME_ID", id} as const)
