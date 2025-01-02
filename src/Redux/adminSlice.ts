import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface adminState {
    adminName: string | null;
    email: string | null;
}

const initialAdminState: adminState = {
    adminName: null,
    email: null,

};

const adminSlice = createSlice({
    name: "admin",
    initialState: initialAdminState,
    reducers: {
        loginAdmin: (
            state,
            action: PayloadAction<{ adminName: string; email: string; }>
        ) => {
            state.adminName = action.payload.adminName;
            state.email = action.payload.email;

        },
        logoutAdmin: (state) => {
            state.adminName = null;
            state.email = null;
            localStorage.removeItem("admin-access-token");
        },
    },
});

export default adminSlice.reducer;
export const { loginAdmin, logoutAdmin } = adminSlice.actions;
