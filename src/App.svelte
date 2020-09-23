<script>
  import router from 'page'
  import querystring from 'querystring'
  
  import Start from './Start.svelte'

  let page, params, qs

  router('*', parseQS)
  
  router('/', navTo(Start))

  router.start()
  
  function navTo(Component) {
    return ctx => {
      params = ctx.params
      console.log(ctx)
      page = Component
    }
  }

  function parseQS(ctx, next) {
    ctx.qs = querystring.parse(ctx.querystring)
    next()
  }

</script>
<svelte:component this={page} {params} {qs} />
