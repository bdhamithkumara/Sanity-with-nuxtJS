<script>
import { formatDate } from "~/utils";
export default{
  props:{
    post:{
      type: Object,
      required: true,
    },
  },
};
</script>

<template >
  <div>
    <div class="container mx-auto mt-8">
      <div v-if="post" class="bg-white p-8 rounded shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-black">
          {{ post.title }}
        </h2>
        <p class="text-gray-500 mb-2">{{ formatDate(post._createdAt) }}</p>

        <div class="mb-4">
          <p class="text-gray-700">{{ post.content }}</p>
        </div>

        <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>

        <div class="mb-4">
          <img v-if="post.mainImage" :src="$urlFor(post.mainImage).width(200).height(300).url()" alt="Cover image"
            class="rounded" />
        </div>
      </div>
    </div>
  </div>
</template>


