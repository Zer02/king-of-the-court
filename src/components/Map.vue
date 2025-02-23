<template>
  <div id="map" style="height: 500px; width: 100%;"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LeaderboardPopup from '@/components/LeaderboardPopup.vue';
import { createApp } from 'vue';

export default {
  data() {
    return {
      courts: [
        {
          id: 1,
          name: 'Court 1',
          lat: 51.505,
          lng: -0.09,
          localRankings: [
            { id: 1, name: 'Alice', score: 500 },
            { id: 2, name: 'Bob', score: 400 },
            { id: 3, name: 'Charlie', score: 300 },
          ],
        },
        {
          id: 2,
          name: 'Court 2',
          lat: 51.51,
          lng: -0.1,
          localRankings: [
            { id: 4, name: 'Diana', score: 600 },
            { id: 5, name: 'Eve', score: 450 },
            { id: 6, name: 'Frank', score: 350 },
          ],
        },
      ],
    };
  },
  methods: {
    handleViewFullLeaderboard(courtId) {
      console.log('View Full Leaderboard for Court ID:', courtId);
      this.$router.push({ name: 'court-leaderboard', params: { id: courtId } });
    },
  },
  mounted() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    this.courts.forEach(court => {
      const marker = L.marker([court.lat, court.lng]).addTo(map);

      // Create a div to hold the Vue component
      const popupContent = document.createElement('div');

      // Mount the LeaderboardPopup component to the div
      createApp(LeaderboardPopup, {
        courtName: court.name,
        localRankings: court.localRankings,
        courtId: court.id,
        onViewFullLeaderboard: this.handleViewFullLeaderboard,
      }).mount(popupContent);

      // Bind the popup to the marker
      marker.bindPopup(popupContent);

      // Log when the marker is clicked
      marker.on('click', () => {
        console.log('Marker clicked:', court.name);
      });
    });
  },
};
</script>