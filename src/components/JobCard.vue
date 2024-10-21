<template>
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
        <div>
            <div class="flex items-center mb-4">
                <span class="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-semibold mr-2">Video Editor</span>
                <span class="text-sm text-gray-500">{{ freelancer.rate }}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-800">{{ freelancer.name }}</h3>
            <p class="text-sm text-gray-600 mt-2">Expertise in:</p>
            <ul class="mt-2">
                <li v-for="skill in freelancer.skills" :key="skill" class="text-sm text-gray-700">
                    <span class="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-md">{{ skill }}</span>
                </li>
            </ul>
        </div>

        <div class="mt-4 flex justify-between items-center pt-4 border-t border-gray-200">
            <span class="text-gray-500 text-sm">{{ freelancer.experience }}</span>
            <button @click="showMore" class="text-green-600 hover:underline">See more</button>
        </div>

        <Modal :show="isModalOpen" @close="isModalOpen = false">
            <h2 class="text-lg font-bold">{{ freelancer.name }}</h2>
            <p class="mt-2 text-sm">Rate: {{ freelancer.rate }}</p>
            <p class="mt-2 text-sm">Experience: {{ freelancer.experience }}</p>
            <p class="mt-2 text-sm">Email: {{ freelancer.Email }}</p>
            <p class="mt-2 text-sm">Phone: {{ freelancer.Phone }}</p>
            <ul class="mt-2">
                <li v-for="skill in freelancer.skills" :key="skill" class="text-sm text-gray-700">
                    {{ skill }}
                </li>
            </ul>
            <p class="mt-2 text-sm">Bio: {{ freelancer.bio }}</p>
        </Modal>
    </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
    components: {
        Modal
    },
    props: {
        freelancer: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isModalOpen: false
        };
    },
    methods: {
        showMore() {
            this.isModalOpen = true;
        }
    }
};
</script>
