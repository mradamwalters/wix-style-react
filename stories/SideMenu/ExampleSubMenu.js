/* eslint-disable no-console */
import React from 'react';
import SideMenu from 'wix-style-react/SideMenu';
import InfoCircle from 'wix-style-react/new-icons/InfoCircle';
import Chat from 'wix-style-react/new-icons/Chat';

export default () => (
  <div style={{ width: 220, height: 700, display: 'flex' }}>
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <SideMenu inFlex>
        <SideMenu.NavigationBackLink>Back</SideMenu.NavigationBackLink>
        <SideMenu.Navigation>
          <SideMenu.NavigationLink
            isActive
            onClick={() => console.log('#1 clicked')}
          >
            Link #1
          </SideMenu.NavigationLink>
          <SideMenu.NavigationLink onClick={() => console.log('#2 clicked')}>
            Link #2
          </SideMenu.NavigationLink>
        </SideMenu.Navigation>
        <SideMenu.Footer>
          <SideMenu.FooterLink
            href="https://support.wix.com/"
            target="_blank"
            icon={<InfoCircle />}
          >
            Help Me!
          </SideMenu.FooterLink>

          <SideMenu.FooterTinyLink
            href="https://support.wix.com/en/article/wix-seo-wiz-suggestions-and-feedback"
            target="_blank"
            icon={
              <div style={{ marginTop: 2 }}>
                <Chat />
              </div>
            }
            tooltip="Hey, come talk to me!"
            onClick={() => console.log('clicked on tiny link yay!')}
          />
        </SideMenu.Footer>
      </SideMenu>
    </div>
  </div>
);
