<template>
    <Modal :show="isSignUpModalOpen" @close="isSignUpModalOpen = false">
        <h2 class="text-lg font-bold mb-4">Sign Up</h2>
        <form @submit.prevent="signUp">
            <input v-model="signUpData.name" type="text" placeholder="Name" class="mb-4 w-full px-4 py-2 border rounded-md" required />
            <input v-model="signUpData.email" type="email" placeholder="Email" class="mb-4 w-full px-4 py-2 border rounded-md" required />
            <input v-model="signUpData.password" type="password" placeholder="Password" class="mb-4 w-full px-4 py-2 border rounded-md" required />
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign Up</button>
        </form>
    </Modal>
</template>

<script>
export default {
    data() {
        return {
            isSignUpModalOpen: true, // Set to true to show modal initially
            signUpData: {
                name: '',
                email: '',
                password: ''
            }
        };
    },
    methods: {
        signUp() {
            // Perform sign-up logic (use API call here for real-world use case)
            if (this.signUpData.name && this.signUpData.email && this.signUpData.password) {
                // Save user sign-up data to localStorage (for demonstration purposes)
                localStorage.setItem('isLoggedIn', 'true'); // Store login state after successful sign-up
                localStorage.setItem('userEmail', this.signUpData.email); // Store user email
                localStorage.setItem('userName', this.signUpData.name); // Store user name

                // Reset modal and redirect to dashboard after sign-up
                this.isSignUpModalOpen = false;
                this.$router.push('/dashboard'); // Redirect after sign-up

                // Refresh the page to update the UI and reflect the login state
                location.reload(); // This ensures the changes are reflected immediately
            } else {
                alert('Please enter valid details.');
            }
        }
    }
};
</script>
