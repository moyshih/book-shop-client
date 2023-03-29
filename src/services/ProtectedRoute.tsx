import { Navigate, Outlet } from "react-router-dom";
import authService from "./authService";

const ProtectedRoute = () => {

    return (
        <>
            {authService.isUserAuth() ?
                <Outlet />
                :
                <Navigate to="/" replace />}
        </>
    );
};

export default ProtectedRoute;