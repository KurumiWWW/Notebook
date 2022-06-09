<template><h1 id="css-grid-网格布局" tabindex="-1"><a class="header-anchor" href="#css-grid-网格布局" aria-hidden="true">#</a> CSS Grid（网格布局）</h1>
<blockquote>
<p>目前为止最强大的<code>CSS</code>布局方案</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/2022-05-17-css_grid/1.png" alt=""><br>
<code>Grid</code>布局与<code>Flex</code>布局都可以快速便捷的给子元素分配布局位置，但是两者还是有一定的差别：</p>
<ul>
<li><code>Flex</code>以轴线布局，只有一条主轴，属性是将子元素根据主轴进行布局，是<code>一维布局</code>;</li>
<li><code>Grid</code>的属性是将容器划分为行<code>row</code>与列<code>column</code>，有两条轴，是二维布局，对于上图中较为复杂的布局，使用<code>Grid</code>会比<code>Flex</code>方便得多，<code>Grid</code>只需要创建一个容器，而<code>Flex</code>只能通过嵌套来实现。</li>
</ul>
<p><img src="@source/.vuepress/public/images/2022-05-17-css_grid/0.png" alt="">
数据来源：https://caniuse.com/?search=grid</p>
<h2 id="一、基本概念" tabindex="-1"><a class="header-anchor" href="#一、基本概念" aria-hidden="true">#</a> 一、基本概念</h2>
<h3 id="_1-元素" tabindex="-1"><a class="header-anchor" href="#_1-元素" aria-hidden="true">#</a> 1.元素</h3>
<p>采用网格布局的元素区域称为容器<code>container</code>；容器内的子元素称为项目<code>item</code>。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- This is container --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>item1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>item2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>item3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>和<code>Flex</code>一样，只有容器元素的子元素才是项目。</p>
<h3 id="_2-行、列、单元格、网格线" tabindex="-1"><a class="header-anchor" href="#_2-行、列、单元格、网格线" aria-hidden="true">#</a> 2.行、列、单元格、网格线</h3>
<blockquote>
<p>就像一个 Excel</p>
</blockquote>
<p>既然是二维布局，它就像表格一样，拥有行<code>row</code>与列<code>column</code>以及对应的<code>CSS属性</code>；<br>
行与列交叉形成单元格<code>cell</code>，划分单元格之间的线，则被称为网格线<code>grid line</code>。</p>
<h2 id="二、属性" tabindex="-1"><a class="header-anchor" href="#二、属性" aria-hidden="true">#</a> 二、属性</h2>
<p><code>Grid</code>布局分别针对容器与项目拥有两套属性。<br>
想要让元素使用<code>Grid</code>布局，需要在要定义为容器元素的样式中设置<code>display:grid</code>（或行内布局<code>inline-grid</code>）。</p>
<h3 id="_1-容器属性" tabindex="-1"><a class="header-anchor" href="#_1-容器属性" aria-hidden="true">#</a> 1.容器属性</h3>
<h4 id="_1-1-grid-template-columns-rows" tabindex="-1"><a class="header-anchor" href="#_1-1-grid-template-columns-rows" aria-hidden="true">#</a> 1.1 grid-template-&lt;columns|rows&gt;</h4>
<h5 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用" aria-hidden="true">#</a> （1）基本使用</h5>
<p>该属性用于划分网格布局的行与列。
<img src="@source/.vuepress/public/images/2022-05-17-css_grid/2.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="_2-repeat-循环次数-循环规则" tabindex="-1"><a class="header-anchor" href="#_2-repeat-循环次数-循环规则" aria-hidden="true">#</a> （2）repeat(循环次数, 循环规则)</h5>
<p>像乘法一样，可以规定重复的值，（1）中的代码便可以优化成：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>循环规则可以是一类模式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 共6列，每3列按照50% 40% 30%模式排列 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50% 40% 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_3-auto-fill-关键字" tabindex="-1"><a class="header-anchor" href="#_3-auto-fill-关键字" aria-hidden="true">#</a> (3) auto-fill 关键字</h5>
<p>自动填充。用于单元格大小固定、容器大小不确定的情况，元素会尽量填充单元格。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/.vuepress/public/images/2022-05-17-css_grid/3.png" alt=""></p>
<h5 id="_4-fr-关键字" tabindex="-1"><a class="header-anchor" href="#_4-fr-关键字" aria-hidden="true">#</a> (4) fr 关键字</h5>
<p><code>fraction</code>：片段
表示比例关系。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/.vuepress/public/images/2022-05-17-css_grid/4.png" alt=""></p>
<p>也可以与绝对单位结合使用</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr 2fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="_5-minmax" tabindex="-1"><a class="header-anchor" href="#_5-minmax" aria-hidden="true">#</a> (5) minmax()</h5>
<p>minmax(最小值, 最大值)</p>
<h5 id="_6-auto-关键字" tabindex="-1"><a class="header-anchor" href="#_6-auto-关键字" aria-hidden="true">#</a> (6) auto 关键字</h5>
<p>浏览器自动决定</p>
<h5 id="_7-网格线名称" tabindex="-1"><a class="header-anchor" href="#_7-网格线名称" aria-hidden="true">#</a> (7) 网格线名称</h5>
<p><code>grid-template</code>属性中，在单元格外可以用中括号表示网格线，中括号内容即为网格线名称</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [c1] 100px [c2] 100px [c3] auto [c4]<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> [r1] 100px [r2] 100px [r3] auto [r4]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_1-2-grid-row-column-gap、grid-gap" tabindex="-1"><a class="header-anchor" href="#_1-2-grid-row-column-gap、grid-gap" aria-hidden="true">#</a> 1.2 grid-&lt;row|column&gt;-gap、grid-gap</h4>
<p><code>gap</code>属性设置单元格间距
<code>grid-gap</code>统一设置间距：<code>grid-gap:行间距 列间距</code>；若只写一个值，则为行列间距。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/.vuepress/public/images/2022-05-17-css_grid/5.png" alt=""></p>
<h4 id="_1-3-grid-auto-flow" tabindex="-1"><a class="header-anchor" href="#_1-3-grid-auto-flow" aria-hidden="true">#</a> 1.3 grid-auto-flow</h4>
<p>决定容器子元素排列规则，默认为<code>row</code></p>
<ul>
<li><code>row</code> 默认 先行后列</li>
<li><code>column</code> 先列后行</li>
<li><code>row dense</code> 先行后列，但尽量填满行再换行</li>
<li><code>column dense</code> 先列后行，但尽量填满列再换列</li>
</ul>
<h4 id="_1-4-justify-align-place-content" tabindex="-1"><a class="header-anchor" href="#_1-4-justify-align-place-content" aria-hidden="true">#</a> 1.4 &lt;justify|align|place&gt;-content</h4>
<p>与<code>flex</code>布局对应属性的概念类似</p>
<ul>
<li><code>justify-content</code> 定义容器内容的水平位置；</li>
<li><code>align-content</code> 定义容器内容的垂直位置；</li>
<li><code>place-content</code> 为复合写法：<code>place-content: align justify</code></li>
</ul>
<p>属性值：</p>
<ul>
<li><code>start</code> 左对齐/顶部对齐</li>
<li><code>end</code> 右对齐/底部对齐</li>
<li><code>center</code> 居中</li>
<li><code>stretch</code> 拉伸，占满整格</li>
<li><code>space-around</code> 两侧间隔相等</li>
<li><code>space-between</code> 两边对齐</li>
<li><code>space-evenly</code> 间隔相等</li>
</ul>
<h4 id="_1-5-justify-align-place-items" tabindex="-1"><a class="header-anchor" href="#_1-5-justify-align-place-items" aria-hidden="true">#</a> 1.5 &lt;justify|align|place&gt;-items</h4>
<p>与<code>flex</code>布局对应属性的概念类似</p>
<ul>
<li><code>justify-items</code> 定义单元格内容的水平位置；</li>
<li><code>align-items</code> 定义单元格内容的垂直位置；</li>
<li><code>place-items</code> 为复合写法：<code>place-items: align justify</code></li>
</ul>
<p>属性值：</p>
<ul>
<li><code>start</code> 左对齐/顶部对齐</li>
<li><code>end</code> 右对齐/底部对齐</li>
<li><code>center</code> 居中</li>
<li><code>stretch</code> 拉伸，占满整格</li>
</ul>
<h4 id="_1-6-grid-auto-columns-rows" tabindex="-1"><a class="header-anchor" href="#_1-6-grid-auto-columns-rows" aria-hidden="true">#</a> 1.6 grid-auto-&lt;columns|rows&gt;</h4>
<p>如果项目位置超出了已定义的网格内容，浏览器会在其周围生成空白网格区域来填补整个网格容器，该属性用来定义生成的空白网格大小，用法与<code>grid-template-&lt;columns|rows&gt;</code>相同，如果不定义该属性，那么生成的新网格大小将以超出容器的项目大小为准。</p>
<h3 id="_2-项目属性" tabindex="-1"><a class="header-anchor" href="#_2-项目属性" aria-hidden="true">#</a> 2.项目属性</h3>
<h4 id="_2-1-grid-column-row-start-end" tabindex="-1"><a class="header-anchor" href="#_2-1-grid-column-row-start-end" aria-hidden="true">#</a> 2.1 grid-&lt;column|row&gt;-&lt;start|end&gt;</h4>
<p>指定项目位置</p>
<ul>
<li><code>grid-column-start</code> 项目左边所在的垂直网格线</li>
<li><code>grid-column-end</code> 项目右边所在的垂直网格线</li>
<li><code>grid-row-start</code> 项目上边所在的水平网格线</li>
<li><code>grid-row-end</code> 项目下边所在的水平网格线</li>
</ul>
<p>网格线可以通过其顺序指定，亦可通过定义好的网格线名称指定。</p>
<p><img src="@source/.vuepress/public/images/2022-05-17-css_grid/6.png" alt=""></p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row dense<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>__item </span><span class="token punctuation">{</span>
    &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #b03531<span class="token punctuation">;</span>
      <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #33a8a5<span class="token punctuation">;</span>
      <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
      <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #6a478f<span class="token punctuation">;</span>
      <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
      <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #da6f2b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>5<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #4ba846<span class="token punctuation">;</span>
      <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
      <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></template>
