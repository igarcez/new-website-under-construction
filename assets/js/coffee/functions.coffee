(($) ->
  $ () ->
      $(".modal-link").click (e) ->
        modal = $(this).attr('href')
        $(modal).fadeToggle()
        e.preventDefault()
        return

      $(".modal-close").click (e) ->
        $(this).parent().fadeToggle()
        return

      return
    return
)(jQuery)