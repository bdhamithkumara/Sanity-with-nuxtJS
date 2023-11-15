<script>
import images from './'
export default{
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
};
</script>


<template >
    <div class="container mx-auto mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-if="images" class="bg-white p-4 rounded shadow-md">
        <h2 class="text-lg font-semibold mb-2 text-black">{{ images.title }}</h2>
      
        <div class="mb-4">
          <img v-if="images.mainImage" :src="$urlFor(images.mainImage).width(200).height(300).url()" alt="Coverimage"
            class="rounded"/>
        </div>
      </div>
    </div>
</template>


