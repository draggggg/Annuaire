

<template>
	<div class="menu-test">
    		<div>
			<h3>{{name}}</h3>
		</div>
	</div>
</template>


<script>

export default {
	name: "TestFor",
	props: ["metier", "name", "age"],
	created(){
		console.log(this.metier)

	}
}
</script>
