
	<div class="pos_bestsellers_product  product_block_container" 
		data-items="{$slider_options.number_item}" 
		data-speed="{$slider_options.speed_slide}"
		data-autoplay="{$slider_options.auto_play}"
		data-time="{$slider_options.auto_time}"
		data-arrow="{$slider_options.show_arrow}"
		data-pagination="{$slider_options.show_pagination}"
		data-move="{$slider_options.move}"
		data-pausehover="{$slider_options.pausehover}"
		data-md="{$slider_options.items_md}"
		data-sm="{$slider_options.items_sm}"
		data-xs="{$slider_options.items_xs}"
		data-xxs="{$slider_options.items_xxs}">
		{if $title}
		<div class="pos_title">
			{*<span>{l s='Awesome Shop' mod='posbestsellers'}</span>*}
			<span>{l mod='posbestsellers'}</span>
			 <h2>
				{$title}
			</h2>	
		</div>
		{/if}
		{if $title}
		<div class="desc_title">
			{$desc} 
		</div>
		{/if}
		{$rows= $slider_options.rows}
		<div class="row pos_content">
			{if count($products) > 0 && $products != null}		
			<div class="bestsellerSlide owl-carousel ">
			{foreach from=$products item=product name=myLoop}
				{if $smarty.foreach.myLoop.index % $rows == 0 || $smarty.foreach.myLoop.first }
				<div class="item-product">
				{/if}
					{include file="catalog/_partials/miniatures/product.tpl" product=$product}
				{if $smarty.foreach.myLoop.iteration % $rows == 0 || $smarty.foreach.myLoop.last  }
				</div>
				{/if}
			{/foreach}
			</div>
			{else}
				<p style="padding:20px;">{l s='No best sellers at this time' mod='posbestsellers'}</p>	
			{/if}	
		</div>
	</div>

