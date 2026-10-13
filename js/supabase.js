// =========================================================
// SUPABASE CONFIG — PetSafe
// =========================================================

const SUPABASE_URL = 'https://sqpneocapdetejhsfpzk.supabase.co';
const SUPABASE_KEY = 'sb_publishable_A0NA-xH5v88AzikE_F73Tg_zc84qRZW';

// Supabase client (v2)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Helper: Get current user
function getCurrentUser() {
    const user = localStorage.getItem('petsafe_user');
    return user ? JSON.parse(user) : null;
}

// Helper: Require login
function requireLogin() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}

// Helper: Logout
function logout() {
    localStorage.removeItem('petsafe_user');
    window.location.href = 'login.html';
}
