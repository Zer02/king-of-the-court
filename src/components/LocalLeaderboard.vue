<template>
  <div>
    <h2>Local Leaderboard for {{ courtName }}</h2>
    <ul>
      <li v-for="(user, index) in localRankings" :key="user.id">
        {{ index + 1 }}. {{ user.name }} - {{ user.score }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courtName: '',
      localRankings: [],
      courts: [
        {
          id: 1,
          name: 'Court 1',
          localRankings: [
            { id: 1, name: 'Alice', score: 500 },
            { id: 2, name: 'Bob', score: 400 },
            { id: 3, name: 'Charlie', score: 300 },
          ],
        },
        {
          id: 2,
          name: 'Court 2',
          localRankings: [
            { id: 4, name: 'Diana', score: 600 },
            { id: 5, name: 'Eve', score: 450 },
            { id: 6, name: 'Frank', score: 350 },
          ],
        },
      ],
    };
  },
  created() {
    this.loadLeaderboard();
  },
  methods: {
    loadLeaderboard() {
      const courtId = parseInt(this.$route.params.id, 10);
      const court = this.courts.find(court => court.id === courtId);

      if (court) {
        this.courtName = court.name;
        this.localRankings = court.localRankings;
      } else {
        console.error('Court not found');
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>