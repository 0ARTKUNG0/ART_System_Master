<template>
    <Modal :show="isLoginModalOpen" @close="isLoginModalOpen = false">
        <h2 class="text-lg font-bold mb-4">Login</h2>
        <form @submit.prevent="login">
            <input v-model="loginData.email" type="email" placeholder="Email" class="mb-4 w-full px-4 py-2 border rounded-md" required />
            <input v-model="loginData.password" type="password" placeholder="Password" class="mb-4 w-full px-4 py-2 border rounded-md" required />
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Login</button>
        </form>
    </Modal>
</template>

<script>
export default {
    data() {
        return {
            isLoginModalOpen: true, // Set to true to show modal initially
            loginData: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            // Perform login logic (use API call here for real-world use case)
            // For now, assume login is successful if both fields are filled
            if (this.loginData.email && this.loginData.password) {
                // Store login state in localStorage
                localStorage.setItem('isLoggedIn', 'true'); // User is logged in
                localStorage.setItem('userEmail', this.loginData.email); // Store user email
                this.isLoginModalOpen = false; // Close login modal
                this.$router.push('/dashboard'); // Redirect to dashboard

                // Refresh the page after login
                location.reload(); // This will refresh the page and reflect the login state
            } else {
                alert('Please enter valid credentials.');
            }
        },
        checkLoginStatus() {
            // Automatically redirect if already logged in
            if (localStorage.getItem('isLoggedIn') === 'true') {
                this.$router.push('/dashboard');
            }
        }
    },
    mounted() {
        // Check if user is already logged in when the component is mounted
        this.checkLoginStatus();
    }
};
</script>
