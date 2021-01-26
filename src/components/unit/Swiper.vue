<template>
	<div class="swiper">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide v-for="(item,index) in swiperDatas" v-bind:key="index">
				<div 
				class="img" 
				:style="{
					'background-image':'url('+item.path+')'
				}">
				</div>
				<div class="title">{{item.title}}</div>
			</swiper-slide>

		</swiper>
		<div class="swiper-pagination" slot="pagination">
			<div class="swiper_pag_btn swiper_perv"></div>
			<div class="swiper_pag_btn swiper_next"></div>
		</div>
	</div>

</template>

<script>
	export default {
		name: "uSwiper",
		props: {
			swiperDatas:{
				type:Array
			}
		},
		data() {
			return {
				swiperOptions: {
					pagination: {
						el: ".swiper-pagination",
					},
					spaceBetween : 20,
					slidesPerView: 8,
					slidesPerGroup: 8
					
				},
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper;
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.swiper{
		position: relative;
	}
	.swiper-container{
		.swiper-slide{
			.img{
				overflow: hidden;
				height: 120px;
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
			}
			img{
				display: block;
				width: 100%;
			}
			.title{
				padding: 4px 0;
				font-weight: bold;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}

	}
	.swiper-pagination{
		position: absolute;
		top: 50%;
		width: 100%;
		margin-top: -20px;
		.swiper_pag_btn{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			left: -20px;
			position: absolute;
			background: #fff;
			box-shadow: 0 0 8px 0 rgba(0,0,0,.2);
	
		}
		.swiper_next{
			left: auto;
			right: -20px;
		}
	}
</style>
