<template>
    <header>
        <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" class="text-2xl font-bold text-gray-800">Freelancer Finder</a>
            <div class="flex space-x-4">
                <template v-if="!isLoggedIn">
                    <button @click="isLoginModalOpen = true" class="text-gray-600 hover:text-gray-800">Log in</button>
                    <button @click="isSignUpModalOpen = true" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Sign up</button>
                </template>
                <template v-else>
                    <span class="text-gray-600">Welcome, {{ userEmail }}</span>
                    <button @click="logout" class="text-red-500 hover:text-red-600">Log out</button>
                </template>
            </div>
        </nav>

        <!-- Login Modal -->
        <LoginModal v-if="isLoginModalOpen" @close="isLoginModalOpen = false" />

        <!-- Sign Up Modal -->
        <SignUpModal v-if="isSignUpModalOpen" @close="isSignUpModalOpen = false" />
    </header>
</template>

<script>
import LoginModal from '../pages/Login.vue';
import SignUpModal from '../pages/SignUp.vue';

export default {
    data() {
        return {
            isLoginModalOpen: false,
            isSignUpModalOpen: false,
            isLoggedIn: false,
            userEmail: ''
        };
    },
    components: {
        LoginModal,
        SignUpModal
    },
    methods: {
        logout() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            this.isLoggedIn = false;
            this.userEmail = '';
            this.$router.push('/');
            location.reload();
        }
    },
    mounted() {
        // Check login status on component mount
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.userEmail = localStorage.getItem('userEmail');
    }
};
</script>

<style scoped>
/* Add any styles if needed */
</style>
