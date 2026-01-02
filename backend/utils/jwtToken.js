// backend\utils\jwtToken.js
export const sendToken = (user, statusCode, message, res) => {
    const token = user.getJWTToken();
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true, // Prevents JS access (Security)
        secure: true,   // Set to TRUE if using HTTPS. If localhost, often requires false or specific config.
        sameSite: "None", // Required for cross-origin (Frontend port 5173 -> Backend port 4000)
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        message,
        token,
    });
};