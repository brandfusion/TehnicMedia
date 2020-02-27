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

		<xsl:if test="count(//Page) > 0">
			<ul class="nav navbar-nav">
				<xsl:if test="Settings/LayoutNavigationAttributes/@id!=''">
					<xsl:attribute name="id">
						<xsl:value-of select="Settings/LayoutNavigationAttributes/@id" disable-output-escaping="yes"/>
					</xsl:attribute>
				</xsl:if>

				<xsl:apply-templates select="Page">
					<xsl:with-param name="depth" select="1"/>
				</xsl:apply-templates>
			</ul>
		</xsl:if>

	</xsl:template>

	<xsl:template match="//Page">
		<xsl:param name="depth"/>
    <xsl:variable name="MaximumMenulevel">
      <xsl:choose>
    <xsl:when test="ancestor-or-self::* [@MaximumMenuLevels][1]/@MaximumMenuLevels!=''">
      <xsl:value-of select="ancestor-or-self::* [@MaximumMenuLevels][1]/@MaximumMenuLevels"/>  
    </xsl:when>
      <xsl:otherwise>2</xsl:otherwise>
    </xsl:choose>
    </xsl:variable>
		<li>
			<xsl:attribute name="class">
				<xsl:if test="position() = 1 and @AbsoluteLevel &lt;2">homepage </xsl:if>
				<xsl:if test="@InPath='True' or @Active='True'">active </xsl:if>
          		<xsl:if test="count(Page) &gt; 0">dropdown mega-full menu-color1</xsl:if>
			</xsl:attribute>
      
			<a>
	            <xsl:if test="$depth=1">
		            <xsl:if test="count(Page) &gt; 0">
		            	<xsl:attribute name="class">dropdown-toggle</xsl:attribute>
		            </xsl:if>
		            <!-- <xsl:attribute name="data-toggle">dropdown</xsl:attribute> -->
		                            
		            <!-- <xsl:attribute name="role">button</xsl:attribute>
		            <xsl:attribute name="aria-expanded">false</xsl:attribute> -->
	            </xsl:if>
	            <xsl:if test="count(Page) = 0">
		            <xsl:attribute name="aria-expanded">true</xsl:attribute>
		            <xsl:attribute name="data-toggle"></xsl:attribute>
	            </xsl:if> 
        
				<xsl:attribute name="href">
          <xsl:choose>
            <xsl:when test="@Allowclick = 'True'">
              <xsl:value-of select="@FriendlyHref" disable-output-escaping="yes"/>
            </xsl:when>
            <xsl:otherwise>javascript:void(0);</xsl:otherwise>
          </xsl:choose>
				</xsl:attribute>
				<xsl:attribute name="title">
					<xsl:value-of select="@MenuText" disable-output-escaping="yes"/>
				</xsl:attribute>

		        <xsl:value-of select="@MenuText" disable-output-escaping="yes"/>
			</a>
			<xsl:if test="count(Page) and /NavigationTree/Settings/LayoutNavigationSettings/@endlevel > @RelativeLevel and @AbsoluteLevel != $MaximumMenulevel">
				<ul class="dropdown-menu fullwidth M{@AbsoluteLevel}">
					<xsl:apply-templates select="Page">
						<xsl:with-param name="depth" select="$depth+1"/>
					</xsl:apply-templates>
				</ul>
			</xsl:if>
		</li>
	</xsl:template>

</xsl:stylesheet>