javascript: (function() {
  var w = ['coffscoastadvocate.com.au', 'dailyexaminer.com.au', 'tweeddailynews.com.au', 'northernstar.com.au', 'ballinaadvocate.com.au', 'byronnews.com.au', 'echonews.com.au'];
  django.jQuery('select#id_sites > option,select#id_sites_from > option,select#id_extension-0-sites > option').each(function() {
    if (django.jQuery.inArray(django.jQuery(this).text().replace('www.', ''), w) >= 0) {
      django.jQuery(this).attr('selected', 'selected');
    }
  });
})();
