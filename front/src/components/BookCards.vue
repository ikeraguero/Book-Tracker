<template>
    <div class="container max-w-xs">
        <div class="bg m-3 snap-center rounded-lg">
            <img src="../assets/harry.jpg" alt="book cover" class= "w-screen h-72 ml-0 mr-0 rounded-lg">
            <div class="rounded-lg shadow-md overflow-hidden" style="overflow-wrap: anywhere;">
                <div class="p-7">
                    <div class="flex justify-between text-white text-base font-medium mb-2">
                    <h5 class="font-bold">
                        Book Name
                    </h5>
                    <h5 class="ml-24">
                        10.0
                    </h5>
                </div>
                <p class="text-white text-xs absolute">
                    Author's Name
                </p>
                <div class="buttons flex justify-center mt-12">
                    <button class="inline-block px-4 py-1 bg-white rounded mr-2">
                        Remove
                    </button>
                    <button class="inline-block px-4 py-1 bg-white rounded ml-2">
                        Finished
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

#container {
    overflow: auto;
}
.bg {
    background-color: darkcyan;
    
}

</style>