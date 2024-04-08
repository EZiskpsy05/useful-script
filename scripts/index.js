import { addBadge, BADGES } from "./helpers/badge.js";

import _test from "./_test.js";
import archiveToday from "./archiveToday.js";
import bookmark_exporter from "./bookmark_exporter.js";
import bypass_paywall from "./bypass_paywall.js";
import changeAudioOutput from "./changeAudioOutput.js";
import checkWebDie from "./checkWebDie.js";
import cssSelectorViewer from "./cssSelectorViewer.js";
import darkModePDF from "./darkModePDF.js";
import detect_zeroWidthCharacters from "./detect_zeroWidthCharacters.js";
import dino_hack from "./dino_hack.js";
import docDownloader from "./docDownloader.js";
import download_image from "./download_image.js";
import download_watchingVideo from "./download_watchingVideo.js";
import doutube_downloadWatchingVideo from "./doutube_downloadWatchingVideo.js";
import doutube_getAllVideoInUserProfile from "./doutube_getAllVideoInUserProfile.js";
import douyin_batchDownload from "./douyin_batchDownload.js";
import douyin_downloadAllVideoUser from "./douyin_downloadAllVideoUser.js";
import douyin_downloadWachingVideo from "./douyin_downloadWachingVideo.js";
import envato_bypassPreview from "./envato_bypassPreview.js";
import fastDoc from "./fastDoc.js";
import fb_bulkDownload from "./fb_bulkDownload.js";
import fb_checkToken from "./fb_checkToken.js";
import fb_downloadAlbumMedia from "./fb_downloadAlbumMedia.js";
import fb_downloadCommentVideo from "./fb_downloadCommentVideo.js";
import fb_downloadWallMediaFromPosts from "./fb_downloadWallMediaFromPosts.js";
import fb_downloadWatchingVideo from "./fb_downloadWatchingVideo.js";
import fb_exportSaved from "./fb_exportSaved.js";
import fb_fetchAllAddedFriends from "./fb_fetchAllAddedFriends.js";
import fb_getAlbumId from "./fb_getAlbumId.js";
import fb_getAlbumInformation from "./fb_getAlbumInformation.js";
import fb_getAllAlbumIdFromCurrentWebsite from "./fb_getAllAlbumIdFromCurrentWebsite.js";
import fb_getAllAlbumInformation from "./fb_getAllAlbumInformation.js";
import fb_getAllUidFromFbSearch from "./fb_getAllUidFromFbSearch.js";
import fb_getAllUidFromFriendsPage from "./fb_getAllUidFromFriendsPage.js";
import fb_getAllUidOfGroupMembers from "./fb_getAllUidOfGroupMembers.js";
import fb_getAvatarFromUid from "./fb_getAvatarFromUid.js";
import fb_getGroupId from "./fb_getGroupId.js";
import fb_getPageId from "./fb_getPageId.js";
import fb_getTokenBussinessLocation from "./fb_getTokenBussinessLocation.js";
import fb_getTokenBusinessStudio from "./fb_getTokenBusinessStudio.js";
import fb_getTokenCampaigns from "./fb_getTokenCampaigns.js";
import fb_getTokenFfb from "./fb_getTokenFfb.js";
import fb_getTokenFacebook from "./fb_getTokenFacebook.js";
import fb_getTokenMFacebook from "./fb_getTokenMFacebook.js";
import fb_getUid from "./fb_getUid.js";
import fb_getUidFromUrl from "./fb_getUidFromUrl.js";
import fb_invisible_message from "./fb_invisible_message.js";
import fb_messengerCount from "./fb_messengerCount.js";
import fb_messengerHistory from "./fb_messengerHistory.js";
import fb_moreReactionStory from "./fb_moreReactionStory.js";
import fb_openAdsActivities from "./fb_openAdsActivities.js";
import fb_openMemories from "./fb_openMemories.js";
import fb_openSaved from "./fb_openSaved.js";
import fb_revealDeletedMessages from "./fb_revealDeletedMessages.js";
import fb_searchGroupForOther from "./fb_searchGroupForOther.js";
import fb_searchPageForOther from "./fb_searchPageForOther.js";
import fb_storyInfo from "./fb_storyInfo.js";
import fb_storySaver from "./fb_storySaver.js";
import fb_toggleLight from "./fb_toggleLight.js";
import fb_toggleNewFeed from "./fb_toggleNewFeed.js";
import fireship_vip from "./fireship_vip.js";
import getAllEmailsInWeb from "./getAllEmailsInWeb.js";
import getFavicon from "./getFavicon.js";
import getLinkLuanxt from "./getLinkLuanxt.js";
import ggDrive_downloadAllVideosInFolder from "./ggDrive_downloadAllVideosInFolder.js";
import ggdrive_downloadPdf from "./ggdrive_downloadPdf.js";
import ggdrive_downloadPresentation from "./ggdrive_downloadPresentation.js";
import ggdrive_downloadVideo from "./ggdrive_downloadVideo.js";
import ggdrive_generateDirectLink from "./ggdrive_generateDirectLink.js";
import github1s from "./github1s.js";
import github_goToAnyCommit from "./github_goToAnyCommit.js";
import githubdev from "./githubdev.js";
import googleCache from "./googleCache.js";
import googleShortcuts from "./googleShortcuts.js";
import google_downloadAllYourData from "./google_downloadAllYourData.js";
import google_mirror from "./google_mirror.js";
import internalOrExternalLink from "./internalOrExternalLink.js";
import insta_getAllImagesInNewFeed from "./insta_getAllImagesInNewFeed.js";
import insta_getAllImagesInUserProfile from "./insta_getAllImagesInUserProfile.js";
import insta_getAllUserMedia from "./insta_getAllUserMedia.js";
import insta_getUserInfo from "./insta_getUserInfo.js";
import injectScriptToWebsite from "./injectScriptToWebsite.js";
import letItSnow from "./letItSnow.js";
import listAllImagesInWeb from "./listAllImagesInWeb.js";
import nhaccuatui_downloader from "./nhaccuatui_downloader.js";
import openWaybackUrl from "./openWaybackUrl.js";
import passwordGenerator from "./passwordGenerator.js";
import performanceAnalyzer from "./performanceAnalyzer.js";
import pictureInPicture from "./pictureInPicture.js";
import reEnableContextMenu from "./reEnableContextMenu.js";
import removeBloat from "./removeBloat.js";
import removeColours from "./removeColours.js";
import removeCookies from "./removeCookies.js";
import removeImages from "./removeImages.js";
import removeStylesheet from "./removeStylesheet.js";
import runStatJs from "./runStatJs.js";
import scrollToVeryEnd from "./scrollToVeryEnd.js";
import search_googleSite from "./search_googleSite.js";
import search_hopamchuan from "./search_hopamchuan.js";
import search_musicTreding from "./search_musicTreding.js";
import search_paperWhere from "./search_paperWhere.js";
import search_sharedAccount from "./search_sharedAccount.js";
import search_totalIndexedPages from "./search_totalIndexedPages.js";
import search_userscript from "./search_userscript.js";
import screenshotFullPage from "./screenshotFullPage.js";
import send_shareFiles from "./send_shareFiles.js";
import shopee_topVariation from "./shopee_topVariation.js";
import shopee_totalSpendMoney from "./shopee_totalSpendMoney.js";
import showHiddenFields from "./showHiddenFields.js";
import showTheAudios from "./showTheAudios.js";
import showTheImages from "./showTheImages.js";
import showTheVideos from "./showTheVideos.js";
import similarWeb from "./similarWeb.js";
import simpleAllowCopy from "./simpleAllowCopy.js";
import smartPDF from "./smartPDF.js";
import soundcloud_downloadMusic from "./soundcloud_downloadMusic.js";
import spotify_downloadButton from "./spotify_downloadButton.js";
import studocu_bypassPreview from "./studocu_bypassPreview.js";
import studocu_dl from "./studocu_dl.js";
import studocu_downs from "./studocu_downs.js";
import studyphim_unlimited from "./studyphim_unlimited.js";
import table_addNumberColumn from "./table_addNumberColumn.js";
import table_addSortTable from "./table_addSortTable.js";
import table_swapRowAndColumn from "./table_swapRowAndColumn.js";
import tailieu_vn from "./tailieu_vn.js";
import textToSpeech from "./textToSpeech.js";
import tiktok_batchDownload from "./tiktok_batchDownload.js";
import tiktok_downloadVideo from "./tiktok_downloadVideo.js";
import tiktok_downloadWatchingVideo from "./tiktok_downloadWatchingVideo.js";
import toggleEditPage from "./toggleEditPage.js";
import unshorten from "./unshorten.js";
import viewAllLinks from "./viewAllLinks.js";
import viewBrowserInfo from "./viewBrowserInfo.js";
import viewCookies from "./viewCookies.js";
import viewPartialSource from "./viewPartialSource.js";
import viewSavedWifiPass from "./viewSavedWifiPass.js";
import viewScriptsUsed from "./viewScriptsUsed.js";
import viewStylesUsed from "./viewStylesUsed.js";
import viewWebMetaInfo from "./viewWebMetaInfo.js";
import visualEvent from "./visualEvent.js";
import vuiz_createLogo from "./vuiz_createLogo.js";
import vuiz_getLink from "./vuiz_getLink.js";
import webToPDF from "./webToPDF.js";
import whatApp_storySaver from "./whatApp_storySaver.js";
import whatFont from "./whatFont.js";
import whatWebsiteStack from "./whatWebsiteStack.js";
import whellOfNames_hack from "./whellOfNames_hack.js";
import whois from "./whois.js";
import windowSize from "./windowSize.js";
import youtube_downloadVideo from "./youtube_downloadVideo.js";
import youtube_localDownloader from "./youtube_localDownloader.js";
import youtube_nonstop from "./youtube_nonstop.js";
import youtube_toggleLight from "./youtube_toggleLight.js";
import youtube_viewDislikes from "./youtube_viewDislikes.js";
import zingmp3_downloadMusic from "./zingmp3_downloadMusic.js";


// inject badges
const allScripts = {
  _test: _test,
  archiveToday: archiveToday,
  bookmark_exporter: addBadge(bookmark_exporter, BADGES.beta),
  bypass_paywall: bypass_paywall,
  changeAudioOutput: changeAudioOutput,
  checkWebDie: checkWebDie,
  cssSelectorViewer: cssSelectorViewer,
  darkModePDF: addBadge(darkModePDF, BADGES.hot),
  detect_zeroWidthCharacters: detect_zeroWidthCharacters,
  dino_hack: dino_hack,
  docDownloader: docDownloader,
  download_image: addBadge(download_image, BADGES.hot),
  download_watchingVideo: download_watchingVideo,
  doutube_downloadWatchingVideo: addBadge(doutube_downloadWatchingVideo, BADGES.hot),
  doutube_getAllVideoInUserProfile: doutube_getAllVideoInUserProfile,
  douyin_batchDownload: addBadge(douyin_batchDownload, BADGES.beta),
  douyin_downloadAllVideoUser: addBadge(douyin_downloadAllVideoUser, BADGES.new),
  douyin_downloadWachingVideo: addBadge(douyin_downloadWachingVideo, BADGES.new),
  envato_bypassPreview: envato_bypassPreview,
  fastDoc: fastDoc,
  fb_bulkDownload: addBadge(fb_bulkDownload, BADGES.hot),
  fb_checkToken: fb_checkToken,
  fb_downloadAlbumMedia: fb_downloadAlbumMedia,
  fb_downloadCommentVideo: addBadge(fb_downloadCommentVideo, BADGES.hot),
  fb_downloadWallMediaFromPosts: fb_downloadWallMediaFromPosts,
  fb_downloadWatchingVideo: addBadge(fb_downloadWatchingVideo, BADGES.hot),
  fb_exportSaved: addBadge(fb_exportSaved, BADGES.beta),
  fb_fetchAllAddedFriends: fb_fetchAllAddedFriends,
  fb_getAlbumId: addBadge(fb_getAlbumId, BADGES.hot),
  fb_getAlbumInformation: addBadge(fb_getAlbumInformation, BADGES.new),
  fb_getAllAlbumIdFromCurrentWebsite: fb_getAllAlbumIdFromCurrentWebsite,
  fb_getAllAlbumInformation: addBadge(fb_getAllAlbumInformation, BADGES.new),
  fb_getAllUidFromFbSearch: fb_getAllUidFromFbSearch,
  fb_getAllUidFromFriendsPage: fb_getAllUidFromFriendsPage,
  fb_getAllUidOfGroupMembers: addBadge(fb_getAllUidOfGroupMembers, BADGES.hot),
  fb_getAvatarFromUid: fb_getAvatarFromUid,
  fb_getGroupId: addBadge(fb_getGroupId, BADGES.hot),
  fb_getPageId: addBadge(fb_getPageId, BADGES.hot),
  fb_getTokenBussinessLocation: fb_getTokenBussinessLocation,
  fb_getTokenBusinessStudio: addBadge(fb_getTokenBusinessStudio, BADGES.hot),
  fb_getTokenCampaigns: fb_getTokenCampaigns,
  fb_getTokenFfb: fb_getTokenFfb,
  fb_getTokenFacebook: addBadge(fb_getTokenFacebook, BADGES.hot),
  fb_getTokenMFacebook: fb_getTokenMFacebook,
  fb_getUid: addBadge(fb_getUid, BADGES.hot),
  fb_getUidFromUrl: addBadge(fb_getUidFromUrl, BADGES.hot),
  fb_invisible_message: fb_invisible_message,
  fb_messengerCount: addBadge(fb_messengerCount, BADGES.hot),
  fb_messengerHistory: addBadge(fb_messengerHistory, BADGES.beta),
  fb_moreReactionStory: fb_moreReactionStory,
  fb_openAdsActivities: fb_openAdsActivities,
  fb_openMemories: fb_openMemories,
  fb_openSaved: addBadge(fb_openSaved, BADGES.hot),
  fb_revealDeletedMessages: addBadge(fb_revealDeletedMessages, BADGES.hot),
  fb_searchGroupForOther: addBadge(fb_searchGroupForOther, BADGES.hot),
  fb_searchPageForOther: addBadge(fb_searchPageForOther, BADGES.hot),
  fb_storyInfo: addBadge(fb_storyInfo, BADGES.beta),
  fb_storySaver: addBadge(fb_storySaver, BADGES.new),
  fb_toggleLight: fb_toggleLight,
  fb_toggleNewFeed: fb_toggleNewFeed,
  fb_videoDownloader: addBadge(fb_videoDownloader, BADGES.new),
  fireship_vip: addBadge(fireship_vip, BADGES.new),
  getAllEmailsInWeb: addBadge(getAllEmailsInWeb, BADGES.hot),
  getFavicon: getFavicon,
  getLinkLuanxt: addBadge(getLinkLuanxt, BADGES.hot),
  ggDrive_downloadAllVideosInFolder: ggDrive_downloadAllVideosInFolder,
  ggdrive_downloadPdf: addBadge(ggdrive_downloadPdf, BADGES.new),
  ggdrive_downloadPresentation: addBadge(ggdrive_downloadPresentation, BADGES.new),
  ggdrive_downloadVideo: ggdrive_downloadVideo,
  ggdrive_generateDirectLink: ggdrive_generateDirectLink,
  github1s: github1s,
  github_goToAnyCommit: addBadge(github_goToAnyCommit, BADGES.hot),
  githubdev: addBadge(githubdev, BADGES.hot),
  googleCache: googleCache,
  google_downloadAllYourData: google_downloadAllYourData,
  google_mirror: google_mirror,
  googleShortcuts: googleShortcuts,
  insta_getAllImagesInNewFeed: addBadge(insta_getAllImagesInNewFeed, BADGES.beta),
  insta_getAllImagesInUserProfile: insta_getAllImagesInUserProfile,
  insta_getAllUserMedia: insta_getAllUserMedia,
  insta_getUserInfo: insta_getUserInfo,
  insta_injectDownloadBtn: insta_injectDownloadBtn,
  internalOrExternalLink: internalOrExternalLink,
  injectScriptToWebsite: injectScriptToWebsite,
  letItSnow: letItSnow,
  leakCheck: addBadge(leakCheck, BADGES.new),
  listAllImagesInWeb: listAllImagesInWeb,
  medium_readFullArticle: medium_readFullArticle,
  nhaccuatui_downloader: nhaccuatui_downloader,
  openWaybackUrl: openWaybackUrl,
  passwordGenerator: addBadge(passwordGenerator, BADGES.hot),
  pdfstuffs: pdfstuffs,
  performanceAnalyzer: addBadge(performanceAnalyzer, BADGES.hot),
  pictureInPicture: addBadge(pictureInPicture, BADGES.hot),
  removeBloat: removeBloat,
  removeColours: removeColours,
  removeCookies: removeCookies,
  removeImages: removeImages,
  removeStylesheet: removeStylesheet,
  reEnableContextMenu: reEnableContextMenu,
  runStatJs: runStatJs,
  saveAllVideo: addBadge(saveAllVideo, BADGES.new),
  savevideo_me: savevideo_me,
  screenshotFullPage: screenshotFullPage,
  search_googleSite: search_googleSite,
  search_hopamchuan: search_hopamchuan,
  search_musicTreding: search_musicTreding,
  search_paperWhere: search_paperWhere,
  search_sharedAccount: addBadge(search_sharedAccount, BADGES.hot),
  search_totalIndexedPages: search_totalIndexedPages,
  search_userscript: search_userscript,
  scrollToVeryEnd: scrollToVeryEnd,
  scribd_bypassPreview: scribd_bypassPreview,
  scribd_downloadDocuments: addBadge(scribd_downloadDocuments, BADGES.new),
  shopee_topVariation: addBadge(shopee_topVariation, BADGES.hot),
  shopee_totalSpendMoney: addBadge(shopee_totalSpendMoney, BADGES.hot),
  shopee_totalSpendMoney_excel: addBadge(shopee_totalSpendMoney_excel, BADGES.hot),
  showHiddenFields: showHiddenFields,
  showTheAudios: showTheAudios,
  showTheImages: showTheImages,
  showTheVideos: showTheVideos,
  similarWeb: addBadge(similarWeb, BADGES.hot),
  simpleAllowCopy: addBadge(simpleAllowCopy, BADGES.hot),
  smartPDF: smartPDF,
  soundcloud_downloadMusic: addBadge(soundcloud_downloadMusic, BADGES.new),
  spotify_downloadButton: addBadge(spotify_downloadButton, BADGES.new),
  studocu_bypassPreview: studocu_bypassPreview,
  studocu_dl: studocu_dl,
  studocu_downs: studocu_downs,
  studyphim_unlimited: studyphim_unlimited,
  table_addNumberColumn: table_addNumberColumn,
  table_addSortTable: table_addSortTable,
  table_swapRowAndColumn: table_swapRowAndColumn,
  tailieu_vn: tailieu_vn,
  textToSpeech: textToSpeech,
  tiktok_batchDownload: addBadge(tiktok_batchDownload, BADGES.beta),
  tiktok_downloadVideo: tiktok_downloadVideo,
  tiktok_downloadWatchingVideo: addBadge(tiktok_downloadWatchingVideo, BADGES.hot),
  toggleEditPage: addBadge(toggleEditPage, BADGES.hot),
  twitter_downloadButton: addBadge(twitter_downloadButton, BADGES.new),
  unshorten: addBadge(unshorten, BADGES.hot),
  viewAllLinks: viewAllLinks,
  viewBrowserInfo: viewBrowserInfo,
  viewCookies: viewCookies,
  viewPartialSource: viewPartialSource,
  viewSavedWifiPass: addBadge(viewSavedWifiPass, BADGES.new),
  viewScriptsUsed: viewScriptsUsed,
  viewStylesUsed: viewStylesUsed,
  viewWebMetaInfo: viewWebMetaInfo,
  visualEvent: visualEvent,
  vuiz_createLogo: addBadge(vuiz_createLogo, BADGES.new),
  vuiz_getLink: addBadge(vuiz_getLink, BADGES.new),
  webToPDF: webToPDF,
  whatApp_storySaver: whatApp_storySaver,
  whatFont: addBadge(whatFont, BADGES.hot),
  whatWebsiteStack: addBadge(whatWebsiteStack, BADGES.hot),
  whellOfNames_hack: addBadge(whellOfNames_hack, BADGES.new),
  whois: whois,
  windowSize: windowSize,
  youtube_downloadVideo: addBadge(youtube_downloadVideo, BADGES.hot),
  youtube_localDownloader: addBadge(youtube_localDownloader, BADGES.new),
  youtube_nonstop: youtube_nonstop,
  youtube_toggleLight: youtube_toggleLight,
  youtube_viewDislikes: addBadge(youtube_viewDislikes, BADGES.hot),
  zingmp3_downloadMusic: zingmp3_downloadMusic,
};

// alert(Object.keys(allScripts).length);

// inject id to all scripts
Object.entries(allScripts).forEach(([variableName, script]) => {
  script.id = variableName;
});

export { allScripts };
