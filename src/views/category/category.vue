
<template>
  <div class="wrapper">
    <ul class="content">
      <li>aaaa1</li>
      <li>aaaa2</li>
      <li>aaaa3</li>
      <li>aaaa4</li>
      <li>aaaa5</li>
      <li>aaaa6</li>
      <li>aaaa7</li>
      <li>aaaa8</li>
      <li>aaaa9</li>
      <li>aaaa10</li>
      <li>aaaa11</li>
      <li>aaaa12</li>
      <li>aaaa13</li>
      <li>aaaa14</li>
      <li>aaaa15</li>
      <li>aaaa16</li>
      <li>aaaa17</li>
      <li>aaaa18</li>
      <li>aaaa19</li>
      <li>aaaa20</li>
      <li>aaaa21</li>
      <li>aaaa22</li>
      <li>aaaa23</li>
      <li>aaaa24</li>
      <li>aaaa25</li>
      <li>aaaa26</li>
      <li>aaaa27</li>
      <li>aaaa28</li>
      <li>aaaa29</li>
      <li>aaaa30</li>
      <li>aaaa31</li>
      <li>aaaa32</li>
      <li>aaaa33</li>
      <li>aaaa34</li>
      <li>aaaa35</li>
      <li>aaaa36</li>
      <li>aaaa37</li>
      <li>aaaa38</li>
      <li>aaaa39</li>
      <li>aaaa40</li>
      <li>aaaa41</li>
      <li>aaaa42</li>
      <li>aaaa43</li>
      <li>aaaa44</li>
      <li>aaaa45</li>
      <li>aaaa46</li>
      <li>aaaa47</li>
      <li>aaaa48</li>
      <li>aaaa49</li>
      <li>aaaa50</li>
      <li>aaaa51</li>
      <li>aaaa52</li>
      <li>aaaa53</li>
      <li>aaaa54</li>
      <li>aaaa55</li>
      <li>aaaa56</li>
      <li>aaaa57</li>
      <li>aaaa58</li>
      <li>aaaa59</li>
      <li>aaaa60</li>
      <li>aaaa61</li>
      <li>aaaa62</li>
      <li>aaaa63</li>
      <li>aaaa64</li>
      <li>aaaa65</li>
      <li>aaaa66</li>
      <li>aaaa67</li>
      <li>aaaa68</li>
      <li>aaaa69</li>
      <li>aaaa70</li>
      <li>aaaa71</li>
      <li>aaaa72</li>
      <li>aaaa73</li>
      <li>aaaa74</li>
      <li>aaaa75</li>
      <li>aaaa76</li>
      <li>aaaa77</li>
      <li>aaaa78</li>
      <li>aaaa79</li>
      <li>aaaa80</li>
      <li>aaaa81</li>
      <li>aaaa82</li>
      <li>aaaa83</li>
      <li>aaaa84</li>
      <li>aaaa85</li>
      <li>aaaa86</li>
      <li>aaaa87</li>
      <li>aaaa88</li>
      <li>aaaa89</li>
      <li>aaaa90</li>
      <li>aaaa91</li>
      <li>aaaa92</li>
      <li>aaaa93</li>
      <li>aaaa94</li>
      <li>aaaa95</li>
      <li>aaaa96</li>
      <li>aaaa97</li>
      <li>aaaa98</li>
      <li>aaaa99</li>
      <li>aaaa100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  created() {
   
  },
  mounted(){
     this.scroll = new BScroll(".wrapper", {
       probeType:3,
       pullUpLoad:true
     });
     this.scroll.on('scroll',(position) => {
      //  console.log(position);
     }); 
     this.scroll.on('pullingUp',() => {
       console.log('sss');
     })

  },
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: bisque;
  /* 原生滚动 
  overflow: hidden;
  overflow-y: scroll;*/
  overflow: hidden;
}
</style>