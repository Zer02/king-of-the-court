<template>
  <div>
    <h2>Global Leaderboard</h2>
    <ul>
      <li v-for="(player, index) in globalRankings" :key="player.id">
        {{ index + 1 }}. {{ player.name }} - {{ player.score }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  computed: {
    globalRankings() {
      const allPlayers = this.courts.flatMap(court => court.localRankings);
      return allPlayers.sort((a, b) => b.score - a.score);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>