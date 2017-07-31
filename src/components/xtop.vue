<template>
	<mu-back-top :height="500" :bottom="86" :right="45" :duration="1000">
		<!--<i  class="mu-icon material-icons">keyboard_arrow_up</i>-->
		<mu-raised-button label="keyboard_arrow_up" class="demo-raised-button mu-icon material-icons" primary/>
	</mu-back-top>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	
	.mu-back-up{
		opacity: 0.6;
		/*border-radius: 50px;*/
	}
	.mu-raised-button{
		border-radius: 50%;
	}
	.material-icons{
		font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
	}
	.mu-raised-button{
		min-width:0px;
	}
	.mu-raised-button-primary{
		background-color: #fc378c;
	}
	.mu-raised-button-label{
		padding-left:0px;
		padding-right:0px;
	}
</style>