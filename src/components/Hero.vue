<template>
    <section class="bg-green-50 py-12">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">FIND THE BEST EDITING JOBS</h1>
            <p class="text-lg text-gray-600 mb-6">It takes just one job to develop a successful relationship that can propel your career forward.</p>
            <button @click="isWhyUsModalOpen = true" class="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700">Why-Us</button>
        </div>

        <Modal :show="isWhyUsModalOpen" @close="isWhyUsModalOpen = false">
            <h2 class="text-lg font-bold mb-4">Why We Built This Website</h2>
            <p class="text-gray-700 mb-4">
                We built this platform to connect video editors with clients who need high-quality editing services. Our goal is to make it easier for editors to find jobs and for clients to find talented editors. It's a win-win for everyone!
            </p>
        </Modal>
    </section>
</template>

<script>
import Modal from '../components/Modal.vue';

export default {
    data() {
        return {
            isWhyUsModalOpen: false
        };
    },
    components: {
        Modal
    }
};
</script>
