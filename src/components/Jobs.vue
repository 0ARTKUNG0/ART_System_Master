<template>
    <section class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
            <!-- Search Bar and Add Freelancer Button (conditionally visible) -->
            <div class="flex justify-between items-center mb-6">
                <input v-model="searchQuery" type="text" class="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="Search for a freelancer by name, skills, or experience" />
                <!-- Only show button if the user is logged in -->
                <button v-if="isLoggedIn" @click="isAddModalOpen = true" class="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Add Freelancer Contact</button>
            </div>

            <h2 class="text-2xl font-bold text-gray-800 mb-8">Video Editors</h2>

            <!-- Horizontal Scrollable Container with limited 3x3 grid -->
            <div class="overflow-x-auto scroll-container pb-4">
                <div class="grid grid-rows-3 grid-flow-col gap-6" style="width: max-content">
                    <JobCard v-for="freelancer in limitedFreelancers" :key="freelancer.id" :freelancer="freelancer" class="w-[300px] h-auto" />
                </div>
            </div>

            <!-- Modal for Adding New Freelancer -->
            <Modal :show="isAddModalOpen" @close="isAddModalOpen = false">
                <h2 class="text-lg font-bold mb-4">Add New Freelancer</h2>
                <form @submit.prevent="addFreelancer">
                    <input v-model="newFreelancer.name" type="text" placeholder="Name" class="mb-4 w-full px-4 py-2 border rounded-md" required />
                    <input v-model="newFreelancer.rate" type="text" placeholder="Rate (per/hour)" class="mb-4 w-full px-4 py-2 border rounded-md" @blur="appendHourlyRate" required />
                    <input v-model="newFreelancer.experience" type="text" placeholder="Experience (+ years)" class="mb-4 w-full px-4 py-2 border rounded-md" @blur="appendExperience" required />
                    <input v-model="newFreelancer.skills" type="text" placeholder="Skills (, separated)" class="mb-4 w-full px-4 py-2 border rounded-md" required />
                    <input v-model="newFreelancer.bio" type="text" placeholder="Bio" class="mb-4 w-full px-4 py-2 border rounded-md" required />
                    <input v-model="newFreelancer.Phone" type="text" placeholder="Phone Number" class="mb-4 w-full px-4 py-2 border rounded-md" required />
                    <input v-model="newFreelancer.Email" type="text" placeholder="Email" class="mb-4 w-full px-4 py-2 border rounded-md" required />
                    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Freelancer Contact</button>
                </form>
            </Modal>
        </div>
    </section>
</template>

<script>
import JobCard from './JobCard.vue';
import Modal from './Modal.vue';
import { freelancers } from './freelancersData'; // Assuming freelancers data is in another file

export default {
    components: {
        JobCard,
        Modal
    },
    data() {
        return {
            searchQuery: '',
            isAddModalOpen: false,
            newFreelancer: {
                name: '',
                rate: '',
                experience: '',
                skills: '',
                bio: '',
                Phone: '',
                Email: ''
            },
            freelancers,
            isLoggedIn: false // Track login state
        };
    },
    mounted() {
        // Check login state when component is mounted
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    },
    computed: {
        filteredFreelancers() {
            if (!this.searchQuery) {
                return this.freelancers;
            }

            const query = this.searchQuery.toLowerCase();
            return this.freelancers.filter((freelancer) => {
                const nameMatch = freelancer.name.toLowerCase().includes(query);
                const skillsMatch = freelancer.skills.some((skill) => skill.toLowerCase().includes(query));
                const experienceMatch = freelancer.experience.toLowerCase().includes(query);
                return nameMatch || skillsMatch || experienceMatch;
            });
        },
        limitedFreelancers() {
            return this.filteredFreelancers;
        }
    },
    methods: {
        appendHourlyRate() {
            if (this.newFreelancer.rate && !this.newFreelancer.rate.startsWith('$')) {
                this.newFreelancer.rate = '$' + this.newFreelancer.rate;
            }
            if (!this.newFreelancer.rate.includes('/hour')) {
                this.newFreelancer.rate += '/hour';
            }
        },
        appendExperience() {
            if (this.newFreelancer.experience && !this.newFreelancer.experience.includes('years experience')) {
                this.newFreelancer.experience += '+ years experience';
            }
        },
        addFreelancer() {
            this.appendHourlyRate();
            this.appendExperience();

            this.newFreelancer.skills = this.newFreelancer.skills.split(',').map((skill) => skill.trim());

            this.freelancers.push({
                ...this.newFreelancer,
                id: this.freelancers.length + 1
            });

            this.isAddModalOpen = false;
            this.newFreelancer = {
                name: '',
                rate: '',
                experience: '',
                skills: '',
                bio: '',
                Phone: ''
            };
        }
    }
};
</script>

<style scoped>
/* Scrollbar styling */
.scroll-container {
    scrollbar-width: thin;
    scrollbar-color: #cccccc transparent;
}

.scroll-container::-webkit-scrollbar {
    height: 8px;
}

.scroll-container::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-radius: 10px;
}

/* Adjust grid to be scrollable horizontally while maintaining 3 rows */
.grid {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: column;
    grid-gap: 20px;
}
</style>
