<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

  <!--
  Description: ul/li based navigation. No features from admin implemented.
  Recommended settings:
  Fold out: True or False
  Upper menu: Dynamic or Static
  First level: > 0
  Last level: >= First level
  -->

  <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"  encoding="utf-8" />
  <xsl:param name="html-content-type" />

  <xsl:template match="/NavigationTree">
  <div class="post-nav-wrapper clearfix">
  <div class="col-md-6 omega">
  	<div class="previous-post">
    	<div class="post-nav-label">
        	<i class="fa fa-angle-left">&#160;</i>
                        Articolul anterior
        </div>
      	<xsl:if test="string-length(//Page[@Active='True']/preceding-sibling::* [1]/@MenuText)&gt;1">
      		<a href="{//Page[@Active='True']/preceding-sibling::* [1]/@FriendlyHref}" title="{//Page[@Active='True']/preceding-sibling::* [1]/@MenuText}"  class="post-nav-title"><xsl:value-of select="//Page[@Active='True']/preceding-sibling::* [1]/@MenuText"/></a>
      	</xsl:if>
     </div>
  </div>  
  <div class="col-md-6 alpha">
  	<div class="next-post">
    	<div class="post-nav-label">
        	Articolul urmator
            <i class="fa fa-angle-right">&#160;</i>
        </div>
      	<xsl:if test="string-length(//Page[@Active='True']/following-sibling::* [1]/@MenuText)&gt;1">
      <a href="{//Page[@Active='True']/following-sibling::* [1]/@FriendlyHref}" title="{//Page[@Active='True']/following-sibling::* [1]/@MenuText}" class="post-nav-title"><xsl:value-of select="//Page[@Active='True']/following-sibling::* [1]/@MenuText"/></a>
      </xsl:if>
    </div>
  </div>             
  </div><!-- .post-nav-wrapper --> 
  </xsl:template>
</xsl:stylesheet>
