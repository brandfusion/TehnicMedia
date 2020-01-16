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
    <xsl:variable name="groupID" select="Settings/LayoutNavigationSettings/@groupId"/>
    <xsl:variable name="pageID" select="Settings/Pageview/@ID"/>
      <xsl:if test="count(//Page) > 0 ">
      <ul class="landing-menu" id="landing-navigation">        
        <xsl:apply-templates select="Page/Page[contains(@Href, $pageID)]">
		    <xsl:with-param name="depth" select="1"/>
          <xsl:sort select="@Sort" data-type="number" order="ascending"/>
		    </xsl:apply-templates>
      </ul>
    </xsl:if>
  </xsl:template>

  <xsl:template match="//Page">
    <xsl:param name="depth"/> 
    <xsl:variable name="productLevel" select=".//Page[@Type='product']/@AbsoluteLevel"/> 

    <!-- <xsl:value-of select="count(descendant::Page[@AbsoluteLevel=5])" /> <br />     
    <xsl:value-of select="count(descendant-or-self::Page[@AbsoluteLevel=5])" /> -->   

    <xsl:if test="@ProductCount &gt; 0 or count(descendant-or-self::Page[@AbsoluteLevel=4 and @ProductCount &gt; 0]) &gt; 0 or count(descendant-or-self::Page[@AbsoluteLevel=5 and @ProductCount &gt; 0]) &gt; 0">     
      <li>
        <xsl:if test="string(@ChildCount) = '0' or (@ChildCount = count(.//Page[@Type='product'])) ">
       	  <xsl:attribute name="class">nochild</xsl:attribute> 
        </xsl:if>
        <a>
          <xsl:attribute name="class">
            <xsl:if test="@InPath='True'">inpath </xsl:if>
            <xsl:if test="position() = 1">firstitem </xsl:if>
            <xsl:if test="position() = count(//Page)">lastitem </xsl:if>
            <xsl:if test="@Active='True'">activeitem </xsl:if>
            <xsl:if test="@AbsoluteLevel=2">noBg</xsl:if>
          </xsl:attribute>
          <xsl:attribute name="href">  
   			    <xsl:value-of select="@FriendlyHref" disable-output-escaping="yes"/>
          </xsl:attribute>
          <xsl:value-of select="@MenuText" disable-output-escaping="yes"/> 
          <!-- <xsl:if test="@AbsoluteLevel &gt;2"><span> (<xsl:value-of select="count(.//Page[@Type='product'])"/>)</span></xsl:if> -->
        </a>
        <xsl:if test="count(Page)">
          <ul class="M{@AbsoluteLevel} landing">          
            <xsl:apply-templates select="Page">              
              <xsl:with-param name="depth" select="$depth+1"/>
            </xsl:apply-templates>
          </ul>
        </xsl:if>
      </li>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>