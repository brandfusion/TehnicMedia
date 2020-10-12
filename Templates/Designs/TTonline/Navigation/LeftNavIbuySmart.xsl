<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
    <xsl:output method="html" omit-xml-declaration="yes" indent="yes"  encoding="utf-8" />
    <xsl:param name="html-content-type" />
    <xsl:template match="/NavigationTree">
        <xsl:if test="Settings/LayoutNavigationSettings/@mode='ecom' and count(//Page[@InPath='True']/Page) > 0 or count(//Page) > 0">
            <ul>
                <xsl:if test="Settings/LayoutNavigationSettings/@cssclass!=''">
                    <xsl:attribute name="class">
                        <xsl:value-of select="Settings/LayoutNavigationSettings/@cssclass" disable-output-escaping="yes"/>
                    </xsl:attribute>
                </xsl:if>
                <xsl:if test="Settings/LayoutNavigationSettings/@id!=''">
                    <xsl:attribute name="id">
                        <xsl:value-of select="Settings/LayoutNavigationSettings/@id" disable-output-escaping="yes"/>
                    </xsl:attribute>
                </xsl:if>
                <xsl:choose>
                    <xsl:when test="Settings/LayoutNavigationSettings/@mode='ecom'">
                        <xsl:apply-templates select="Page[@InPath='True']/Page">
                            <xsl:with-param name="depth" select="1"/>
                        </xsl:apply-templates>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:apply-templates select="Page">
                            <xsl:with-param name="depth" select="1"/>
                        </xsl:apply-templates>
                    </xsl:otherwise>
                </xsl:choose>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="//Page">
        <xsl:param name="depth"/>
        <li class="menu-left__item">
            <button type="button">
                <xsl:attribute name="class">
                    <xsl:if test="count(Page) and /NavigationTree/Settings/LayoutNavigationSettings/@endlevel > @RelativeLevel">
                        <xsl:if test="@InPath='False'">btn-icon</xsl:if>
                        <xsl:if test="@InPath='True'">btn-icon open</xsl:if>
                    </xsl:if>
                </xsl:attribute>
                <div class="ico">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path d="M352.5,257.2c0,6.1-2.3,12.3-7,17l-144,144c-9.4,9.4-24.6,9.4-33.9,0c-9.4-9.4-9.4-24.6,0-33.9l127-127l-127-127
              c-9.4-9.4-9.4-24.6,0-33.9c9.4-9.4,24.6-9.4,33.9,0l144,144C350.2,244.9,352.5,251,352.5,257.2z"/>
          </svg>
                </div>
            </button>
            <a>
                <xsl:attribute name="class">
                    <xsl:text disable-output-escaping="yes">menu-left__link </xsl:text>
                    <xsl:if test="@Active='True'"> menu-left__link--active </xsl:if>
                    <xsl:if test="count(Page) and /NavigationTree/Settings/LayoutNavigationSettings/@endlevel > @RelativeLevel">
                        <xsl:if test="@InPath='False'"> menu-left__link--closed </xsl:if>
                        <xsl:if test="@InPath='True'"> menu-left__link--open </xsl:if>
                    </xsl:if>
                </xsl:attribute>
                <xsl:attribute name="data-tooltip-content">
                    <xsl:value-of select="@MenuText" disable-output-escaping="yes"/>
                </xsl:attribute>
                <xsl:attribute name="href">
                    <xsl:value-of select="@FriendlyHref" disable-output-escaping="yes"/>
                </xsl:attribute>
                <span>
                    <xsl:value-of select="@MenuText" disable-output-escaping="yes"/>
                </span>
            </a>
            <xsl:if test="count(Page)  and /NavigationTree/Settings/LayoutNavigationSettings/@endlevel > @RelativeLevel">
                <!--and @InPath='True'-->
                <ul class="menu-left menu-left--submenu">
                    <xsl:apply-templates select="Page">
                        <xsl:with-param name="depth" select="$depth+1"/>
                    </xsl:apply-templates>
                </ul>
            </xsl:if>
        </li>
    </xsl:template>

</xsl:stylesheet>